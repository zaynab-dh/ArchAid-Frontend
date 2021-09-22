import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from 'axios';
import API from "../API";
import Countries from '../components/countries';

export default function EditCity() {
  let history = useHistory();
  let { id } = useParams();

  // const [country, setCountry] = useState("");
  const [state, updateState] = useState({
  city_name:"",countryId:"",
});


  function setState(nextState) {
    updateState((previousState) => ({
      ...previousState,
      ...nextState,
    }));
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setState({ [name]: value });
  }

  function handleSave(e) {
    e.preventDefault();

    let reqBody = {
      city_name: state.city_name,  
    };

    API.put(`cities/${id}`, reqBody)
    .then(history.push('/cities1'))
  }

  useEffect(() => {
    function fetchData() {
      API.get(`cities/${id}`).then((res) => {
        const data = res.data;
        setState({
          city_name: data.response.city_name, 
        });
      });
    }
    fetchData();
  }, []);

  return (
    <>

      <div className='text-center'>

      <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Edit city</h2>
      </div>
      <center><form class="pt-3" onSubmit={handleSave} action="" >
        <div class="form-group">
          <input onChange={handleChange} type="text" class="form-control form-control-lg" name='city_name' value={state.city_name} id="city_name" placeholder="city name" />
        </div>

        <div class="form-group">
            <label for="exampleFormControlSelect1">Choose a country</label>
            <Countries name="countryId" value={state.countryId} onChange={handleChange} />
        </div>

        <div class="mt-3">
          <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Save">Save</button>
        </div>

        
      </form>
      </center>
      <br/>
      <div class="mt-3">
        <center><Link to={"/cities1"}><button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Back">Back</button></Link></center>
      </div>

    </div>
    </>
  );
}

// export default function EditCity() {
//   let history = useHistory();
//   let { id } = useParams();

//   // const [country, setCountry] = useState("");
//   const [state, updateState] = useState({
//   city_name:"",
//   countryId:""
// });


//   function setState(nextState) {
//     updateState((previousState) => ({
//       ...previousState,
//       ...nextState,
//     }));
//   }

//   function handleChange(e) {
//     let { name, value } = e.target;
//     setState({ [name]: value });
//   }

//   function handleSave(e) {
//     e.preventDefault();

//     let reqBody = {
//       country_name: state.country_name,  
//     };

//     API.put(`cities/${id}`, reqBody)
//     .then(history.push('/cities1'))
//   }

//   useEffect(() => {
//     function fetchData() {
//       API.get(`cities/${id}`).then((res) => {
//         const data = res.data;
//         setState({
//           city_name: data.response.city_name, 
//         });
//       });
//     }
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div id="editEmployeeModal">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <form onSubmit={handleSave}>
//               <div class="modal-header">
//                 <h4 class="modal-title">edit city</h4>
//               </div>
//               <div class="modal-body">
//                 <div class="form-group">
//                   <label>city name</label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     name="city_name"
//                     value={state.city_name}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div class="form-group">
//                   <label for="exampleFormControlSelect1">Choose a country</label>
//                   <Countries name="countryId" value={state.countryId} onChange={handleChange} />
//               </div>

//               <div class="modal-footer">
//               <button 
//              type="submit"
//               // onClick={() =>
//                 // history.push({ pathname: `/countries1` }) } 
//               ></button>

//               {/* <button type="submit" value="save"> </button> */}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
