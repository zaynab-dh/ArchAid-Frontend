import { useEffect, useState } from 'react';


export default function Cities(props) {
    //Get All cities
    const [cities, setCities] = useState([]);
    const setSelCity = props.onChange;

    useEffect(() => {
        let getCities = async () => {
            let url = 'http://localhost:8080/cities'
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) {
                let event = {
                    target: {
                        name: props.name,
                        value: result.response[0]._id
                    }
                }
                setCities(result.response);
                // setSelCity(event);
            }
        }
        getCities();
    }, [])


    let handleChange = (e) => {
        let event = {
            target: {
                name: props.name,
                value: e.target.value
            }
        }
        setSelCity(event)
    }

    return (
        <div>

            {/* <form onSubmit={Submit}> */}
            <select
                class="form-control form-control-lg"
                onChange={handleChange}
                value={props.value}
            >
                {cities.map((city) => (
                    <option
                        // selected={props.id === country._id}
                        key={city._id}
                        value={city._id}
                    >
                        {city.city_name}
                    </option>
                ))}
            </select>
        </div>
    )
}

