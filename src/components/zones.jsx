import { useEffect, useState } from 'react';


export default function Zones(props) {
    //Get All zones
    const [zones, setZones] = useState([]);
    const setSelZone = props.onChange;

    useEffect(() => {
        let getZones = async () => {
            let url = 'http://localhost:8080/zones'
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) {
                let event = {
                    target: {
                        name: props.name,
                        value: result.response[0]._id
                    }
                }
                setZones(result.response);
                setSelZone(event);
            }
        }
        getZones();
    }, [])

    let handleChange = (e) => {
        let event = {
            target: {
                name: props.name,
                value: e.target.value
            }
        }
        setSelZone(event)
    }

    return (
        <div>

            {/* <form onSubmit={Submit}> */}
            <select
                class="form-control form-control-lg"
                onChange={handleChange}
                value={props.value}
            >
                {zones.map((zone) => (
                    <option
                        // selected={props.id === country._id}
                        key={zone._id}
                        value={zone._id}
                    >
                        {zone.code}
                    </option>
                ))}
            </select>
        </div>
    )
}

