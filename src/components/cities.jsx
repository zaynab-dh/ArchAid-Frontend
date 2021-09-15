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

            {/* <select name="Srole" className="login-in2" required onChange={e => setCities(e.target.value)}>
                <option value="">None</option>
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
            </select> */}
            {loading ? 'loading...' : ''}
            <select>
                {cities.map((city) => (
                    <option key={city._id} value={city._id} required onChange={e => setCities(e.currentTarget.value)}>
                        {city.city_name}
                    </option>
                ))}
            </select>
        </div>
    )
}
