import { useEffect, useState } from 'react';


export default function FindRules() {
    //Get All countries
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [zones, setZones] = useState([]);
    // const [property, setProperty] = useState([]);
    const [selCount, setSelCount] = useState(null);
    const [selCity, setSelCity] = useState(null);
    const [selZone, setZone] = useState(null);

    useEffect(() => {
        let getCountries = async () => {
            let url = 'http://localhost:8080/countries'
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) {
                setCountries(result.response);
                if (result.response && result.response[0]) {
                    setSelCount(result.response[0]._id)
                }
            }
        }
        getCountries();
    }, [])

    useEffect(() => {
        let getCities = async () => {
            let url = `http://localhost:8080/cities/getByCountryId/${selCount}`;
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) {
                setCities(result.response);
                if (result.response && result.response[0]) {
                    setSelCity(result.response[0]._id)
                }
            }
        }
        if (selCount) getCities();
    }, [selCount])

    useEffect(() => {
        let getZones = async () => {
            let url = `http://localhost:8080/zones/getByCityId/${selCity}`;
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) setZones(result.response);
        }
        if (selCity) getZones();
    }, [selCity])

    let handleCountryChange = (e) => {
        setSelCount(e.target.value);
    }

    let handleCityChange = e => {
        setSelCity(e.target.value);
    }

    let handleZoneChange = e => {
        setZone(e.target.value)
    }

    return (
        <div>
            {/* <form onSubmit={Submit}> */}

            <select
                class="form-control form-control-lg"
                onChange={handleCountryChange}
                value={selCount}
            >
                {countries.map((country) => (
                    <option
                        required
                        key={country._id}
                        value={country._id}
                    >
                        {country.country_name}
                    </option>
                ))}
            </select>

            <br /><br />

            <select
                class="form-control form-control-lg"
                onChange={handleCityChange}
                value={selCity}
            >
                {cities.map((city) => (
                    <option
                        key={city._id}
                        value={city._id}
                    >
                        {city.city_name}
                    </option>
                ))}
            </select>

            <br /><br />

            <select
                class="form-control form-control-lg"
                onChange={handleZoneChange}
                value={selZone}
            >
                {zones.map((zone) => (
                    <option
                        key={zone._id}
                        value={zone._id}
                    >
                        {zone.code}
                    </option>
                ))}
            </select>

            {/* 
                <button type="submit"/> */}
            {/* </form> */}

        </div>
    )
}
