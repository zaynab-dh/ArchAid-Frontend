import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ZoneRules from "../components/zoneRules"
import { useHistory } from 'react-router-dom';
import { IntNavigation } from "../components/intNavigation";

export default function FindRules() {
    const history = useHistory();

    //Get All countries
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [zones, setZones] = useState([]);
    const [zoneRules, setZoneRules] = useState([]);
    const [selCount, setSelCount] = useState(null);
    const [selCity, setSelCity] = useState(null);
    const [selZone, setSelZone] = useState(null);

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
            if (result.success) {
                setZones(result.response);
                if (result.response && result.response[0]) {
                    setSelZone(result.response[0]._id)
                }
            }
        }
        if (selCity) getZones();
    }, [selCity])

    useEffect(() => {
        let getZoneRules = async () => {
            let url = `http://localhost:8080/zonerules/getByZoneId/${selZone}`;
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) {
                setZoneRules(result.response);
            }
        }
        getZoneRules();
    }, [])


    let handleCountryChange = (e) => {
        setSelCount(e.target.value);
    }

    let handleCityChange = e => {
        setSelCity(e.target.value);
    }

    let handleZoneChange = (id) => {
        setSelZone(id);
        // history.push(`/zonerules/${id}`);
    }

    let handleSubmit = e => {
        e.preventDefault();
        history.push(`/zonerules/${selZone}`);
    }

    return (
        <>
      <IntNavigation />
        <div className='text-center'>


            <div className='col-md-10 col-md-offset-1 section-title section-title1'>
                <h2>Find your zone's rules</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <center>

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
                        onChange={(e) => handleZoneChange(e.target.value)}

                    >
                        {zones.map((zone) => (
                            <option
                                key={zone._id}
                                value={zone._id}
                            >
                                {zone.code}
                            </option>
                        ))}
                    </select></center>

                <div>
                    <button
                        type="submit"
                        className="btn btn-block btn-width btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                        value="Submit"
                        style={{
                            margin: '30px auto'
                        }}
                    >
                        Submit
                    </button>
                </div>

                {/* <button type="submit"/> */}

            </form>

            <div class="mt-3">
        <center><Link to={"/"}><button type="submit" class="btn btn-block btn-width btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Back">Back</button></Link></center>
      </div>

        </div>
        </>
    )
}
