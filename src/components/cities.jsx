import { useEffect, useState } from 'react';


export default function Cities() {


    //Get All cities
    const [loading, setLoading] = useState(true);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        let getCities = async () => {
            let url = 'http://localhost:8080/cities'
            let res = await fetch(url);
            let result = await res.json();
            setLoading(false);
            if (result.success) setCities(result.response);
        }
        getCities();
    }, [])

    return (
        <div>
            {loading ? 'loading...' : ''}
            {cities.map((city) => (
                <div key={city._id}>
                    <p>{city.city_name}</p>
                </div>
            ))}
        </div>
    )
}
