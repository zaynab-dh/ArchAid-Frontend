import { useEffect, useState } from 'react';


export default function Countries(props) {
    //Get All countries
    const [countries, setCountries] = useState([]);
    // const [selCount, setSelCount] = useState(null);
    const setSelCountry = props.onChange;

    useEffect(() => {
        let getCountries = async () => {
            let url = 'http://localhost:8080/countries'
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) {
                let event = {
                    target: {
                        name: props.name,
                        value: result.response[0]._id
                    }
                }
                setCountries(result.response);
                // setSelCountry(event);
            }
        }
        getCountries();
    }, [])

    let handleChange = (e) => {
        let event = {
            target: {
                name: props.name,
                value: e.target.value
            }
        }
        setSelCountry(event)
    }

    return (
        <div>

            {/* <form onSubmit={Submit}> */}
            <select
                class="form-control form-control-lg"
                onChange={handleChange}
                value={props.value}
            >
                {countries.map((country) => (
                    <option
                        // selected={props.id === country._id}
                        key={country._id}
                        value={country._id}
                    >
                        {country.country_name}
                    </option>
                ))}
            </select>
        </div>
    )
}

