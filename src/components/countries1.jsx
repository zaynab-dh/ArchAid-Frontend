import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function Countries1() {
    //Get All countries
    const [countries, setCountries] = useState([]);
    const [selCount, setSelCount] = useState(null);

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

    

    let handleCountryChange = (e) => {
        setSelCount(e.target.value);
    }

    let handleDelete = (e) => {
        
    }

    return (
        <div>

            <div class="col-sm-6">
                  <h2>
                    countries
                  </h2>
               
                <div class="col-sm-6">
                  <Link to="/addcountry" class="btn " data-toggle="modal">
                    <i class="bx bxs-plus-circle bx-burst"></i>
                    <span>add new country</span>
                  </Link>
                </div>
              
            </div>

            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>country name</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country) => (
                    // <li
                    //     required
                    //     key={country._id}
                    //     value={country._id}
                    // >
                    //     {country.country_name}
                    // </li>
                    <tr>
                    <td>{country.country_name}</td>
                    <td>
                        <a
                        href="#"
                        class="delete"
                        data-toggle="modal"
                        onClick={handleDelete}
                        >
                        <i class="material-icons" data-toggle="tooltip" title="Delete">
                            &#xE872;
                        </i>
                        </a>
                    </td>
                    <td>
                    <Link to={`/editcountry/${country._id}`}><button >edit</button></Link>
                    </td>
                    </tr>

                ))}
              </tbody>
            </table>
            {/* <form onSubmit={Submit}> */}

        </div>
    )
}
