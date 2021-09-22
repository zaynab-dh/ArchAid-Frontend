import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";


export default function Login() {

    // console.log(props);

    const [loading, setLoading] = useState(true);
    const [Password, setPassword] = useState();
    const [Username, setUsername] = useState();
    const [Role, setRole] = useState();
    const [Users, setUsers] = useState();

    const history = useHistory();

    useEffect(() => {
        let getUsers = async () => {
            let url = 'http://localhost:8080/users'
            let res = await fetch(url);
            
            let result = await res.json();
            setLoading(false);
            if (result.success) setUsers(result.response);
        }
        getUsers();
    }, [])

    const Submit = async (e) => {

        e.preventDefault();
        // console.log(Users);
        // console.log(typeof (Users));
        // console.log(Users.length);


        for (let index = 0; index < Users.length; index++) {

            if (Users[index].username === Username && Users[index].password === Password) {
                console.log(Role);
                if (Role === "Admin") {

                    // props.IsRoleAdmin = true;
                    history.push("/adminpage");
                    

                }
            }

        }

    }

    return (
        <>
            {/* <div style={{ height: "100%", textAlign: "center", top: "50%", bottom: "50%", margin: "auto", }}>

                <div className="login-container">
                    <form action="" onSubmit={Submit}>
                        <label htmlFor="" style={{ display: "block" }}>
                            <input className="login-in" type="text" placeholder="  Username" onChange={e => setUsername(e.target.value)} required />
                        </label>

                        <label htmlFor="" style={{ display: "block" }}>
                            <input type="password" className="login-in" placeholder="  Password" onChange={e => setPassword(e.target.value)} required />
                        </label>


                        <label htmlFor="" style={{ display: "block" }} htmlFor="Srole">
                            Select Role <select name="Srole" className="login-in2" required onChange={e => setRole(e.target.value)}>
                                <option value="">None</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </label>

                        <label htmlFor="Submit">

                            <input type="submit" value="Login" className="login-in1" />

                        </label>

                    </form>
                </div>

            </div> */}


    <div className='text-center'>

      <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Admin login</h2>
      </div>
      <center><form class="pt-3" onSubmit={Submit} action="" >
        <div class="form-group">
          <input onChange={e => setUsername(e.target.value)} required type="text" class="form-control form-control-lg" name='Username' id="Username" placeholder="Username" />
        </div>

        <div class="form-group">
          <input onChange={e => setPassword(e.target.value)} required type="password" class="form-control form-control-lg" name='Username' id="Username" placeholder="Password" />
        </div>

        <select
                class="form-control form-control-lg"
                name="Srole"
                required onChange={e => setRole(e.target.value)}
            >
                <option value="">None</option>
                <option value="Admin">Admin</option>
            </select>

        <div class="mt-3">
          <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Login">Login</button>
        </div>
      </form>
      </center>
      <br/>
      <div class="mt-3">
        <center><Link to={"/"}><button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Back">Back</button></Link></center>
      </div>

    </div>
        </>
    )
}


