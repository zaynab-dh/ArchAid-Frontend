import { useEffect, useState } from 'react';


export default function Countries() {


    //Get All countries
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        let getCountries = async () => {
            let url = 'http://localhost:8080/countries'
            let res = await fetch(url);
            let result = await res.json();
            setLoading(false);
            if (result.success) setCountries(result.response);
        }
        getCountries();
    }, [])


    return (
        <div>
            {loading ? 'loading...' : ''}
            {countries.map((country) => (
                <div key={country._id}>
                    <p>{country.country_name}</p>
                </div>
            ))}
        </div>
    )
}
