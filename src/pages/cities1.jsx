import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import API from "../API";
import { IntNavigation } from "../components/intNavigation";


export default function Cities1() {
    //Get All cities
    const [cities, setCities] = useState([]);
    const [selCity, setSelCity] = useState(null);

    useEffect(() => {
        let getCities = async () => {
            let url = 'http://localhost:8080/cities'
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) {
                setCities(result.response);
                if (result.response && result.response[0]) {
                    setSelCity(result.response[0]._id)
                }
            }
        }
        getCities();
    }, [])


    let handleDelete = (id) => {
      API.delete(`cities/${id}`);

      let filter = [...cities].filter((cities) => cities._id !== id);
                setCities(filter);
    }

    return (
      <>
      <IntNavigation />
        <div className='text-center padding'>

            <div class="col-sm-6">
            <div className='col-md-10 col-md-offset-1 section-title section-title1 section-title3'>
                <h2>Cities</h2>
            </div>
            <div class="col-sm-6">
              <Link to="/addcity" className="btn btnn1" data-toggle="modal">
                <i class="bx bxs-plus-circle bx-burst"></i>
                <span>add new city</span>
              </Link>
            </div>  
            <div class="col-sm-6">
              <Link to="/adminpage" className="btn btnn2" data-toggle="modal">
                <i class="bx bxs-plus-circle bx-burst"></i>
                <span>Cancel</span>
              </Link>
            </div>  
                
              
            </div>
            
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>city name</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city) => (
                    <tr>
                    <td>{city.city_name}</td>
                    <td>
                    <Link to={`/editcity/${city._id}`}><button >edit</button></Link>
                    </td>
                    <td>
                    <button onClick={() => handleDelete(city._id)}>Delete</button>
                    </td>
                    </tr>

                ))}
              </tbody>
            </table>

        </div>
        </>
    )
}
