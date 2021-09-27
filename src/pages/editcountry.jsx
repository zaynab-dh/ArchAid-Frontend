import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from 'axios';
import API from "../API";
import { IntNavigation } from "../components/intNavigation";

export default function EditCountry() {
  let history = useHistory();
  let { id } = useParams();

  // const [country, setCountry] = useState("");
  const [state, updateState] = useState({
    country_name: "",
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
      country_name: state.country_name,
    };

    API.put(`countries/${id}`, reqBody)
      .then(() => {
        history.push('/countries1');
      })
  }

  useEffect(() => {
    function fetchData() {
      API.get(`countries/${id}`).then((res) => {
        const data = res.data;
        setState({
          country_name: data.response.country_name,
        });
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <IntNavigation />
      <div className='text-center'>

        <div className='col-md-10 col-md-offset-1 section-title section-title1'>
          <h2>Edit country</h2>
        </div>
        <center><form class="pt-3" onSubmit={handleSave} action="" >
          <div class="form-group">
            <input onChange={handleChange} type="text" class="form-control form-control-lg" name='country_name' value={state.country_name} id="country_name" placeholder="country name" />
          </div>
          <div class="mt-3">
            <button type="submit" class="btn btn-block btn-width btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Save">Save</button>
          </div>
        </form>
        </center>
        <br />
        <div class="mt-3">
          <center><Link to={"/countries1"}><button type="submit" class="btn btn-block btn-width btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Back">Back</button></Link></center>
        </div>

      </div>
    </>
  );
}
