import { useEffect, useState } from 'react';


export default function ZoneRules() {


    //Get All cities
    const [loading, setLoading] = useState(true);
    const [zoneRules, setZoneRules] = useState([]);

    useEffect(() => {
        let getZoneRules = async () => {
            let url = 'http://localhost:8080/zonerules'
            let res = await fetch(url);
            let result = await res.json();
            setLoading(false);
            if (result.success) setZoneRules(result.response);
        }
        getZoneRules();
    }, [])

    return (
        <div>
            {loading ? 'loading...' : ''}
            {zoneRules.map((zonerule) => (
                <div key={zonerule._id}>
                    <p>{zonerule.value}</p>
                </div>
            ))}
        </div>
    )
}
