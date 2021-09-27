import { faSortAlphaDownAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import API from "../API";
import { IntNavigation } from "../components/intNavigation";
import Swal from 'sweetalert2'


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



  // let handleCountryChange = (e) => {
  //     setSelCount(e.target.value);
  // }

  let handleDelete = async (id) => {
    const willDelete = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#fbb23d',
      cancelButtonColor: 'rgb(37, 35, 35)',
      confirmButtonText: 'Yes, delete it!'

    });
    if (willDelete.isConfirmed) {
      try {
        let res = await API.delete(`countries/${id}`);

        let filter = [...countries].filter((countries) => countries._id !== id);
        setCountries(filter);
        const result = res.data.message;
        if (res.data.isConfirmed) {
          await Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      } catch (e) {
        console.log(e);
      }
    }
  }


  return (
    <><IntNavigation />
      <div className='text-center'>

        <div class="col-sm-6">
          <div className='col-md-10 col-md-offset-1 section-title section-title1 section-title2'>
            <h2>Countries</h2>
          </div>

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
              <tr>
                <td>{country.country_name}</td>
                <td>
                  <Link to={`/editcountry/${country._id}`}><button >edit</button></Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(country._id)}>Delete</button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>

      </div>
    </>
  )
}
