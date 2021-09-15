import { useEffect, useState } from 'react';


export default function Properties() {


    //Get All properties
    const [loading, setLoading] = useState(true);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        let getProperties = async () => {
            let url = 'http://localhost:8080/properties'
            let res = await fetch(url);
            let result = await res.json();
            setLoading(false);
            if (result.success) setProperties(result.response);
        }
        getProperties();
    }, [])

    return (
        <div>
            {loading ? 'loading...' : ''}
            {properties.map((property) => (
                <div key={property._id}>
                    <p>{property.property_name}</p>
                </div>
            ))}
        </div>
    )
}
