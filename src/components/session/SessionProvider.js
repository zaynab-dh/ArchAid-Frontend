import React, { useState, useEffect } from 'react';
import SessionContext from './SessionContext';
import { setCookie, getCookie, removeCookie } from '../../cookies';
import { toast } from 'react-toastify';

export default function SessionProvider({ children }) {

    const [session, setValue] = useState({
        user: {
            _id: getCookie('_id'),
            token: getCookie('token'),
            role: getCookie('role'),
        }
    });

    useEffect(() => {
        function initializeSession() {
            let id = getCookie('id');
            let token = getCookie('token');
            if (token) fetch(`http://localhost:8080/users/${id}`, {
                headers: {
                    'token': token
                }
            }).then(res => res.json()).then(res => {
                let user = { ...res.data, token };
                updateSession({ user });
            });
        }
        initializeSession();
    }, []);

    function updateSession(nextSession) {
        let value = typeof nextSession === "function" ?
            nextSession : prevSession => ({ ...prevSession, ...nextSession });
        setValue(value);
    }

    async function login({ username, password }) {

        // try to login
        let { error, id, token } = await fetch('http://localhost:8080/users', {
            method: "post",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(res => res.json());

        // return from the function if you have an error
        if (error || !token) return toast.error(error);

        // get the data of the loggedin user
        let result = await fetch(`http://localhost:8080/users/${id}`, {
            headers: {
                'token': token
            }
        }).then(res => res.json());

        let user = { ...result.data, token };

        setCookie('id', id);
        setCookie('token', token);
        updateSession({ user });
        toast(`Welcome ${user.username}!`);
    }

    function logout() {
        updateSession({ user: { token: null } });
        removeCookie('id');
        removeCookie('token');
    }

    const context = {
        session,
        actions: {
            login,
            logout
        }
    }

    return (
        <SessionContext.Provider value={context}>
            {children}
        </SessionContext.Provider>
    )
}