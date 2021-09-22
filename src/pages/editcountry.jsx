import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from 'axios';
import API from "../API";

export default function EditCountry() {
  let history = useHistory();
  let { id } = useParams();

  // const [country, setCountry] = useState("");
  const [state, updateState] = useState({
  country_name:"",
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
    .then(history.push('/countries1'))
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
      <div id="editEmployeeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <form onSubmit={handleSave}>
              <div class="modal-header">
                <h4 class="modal-title">edit country</h4>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label>country name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="country_name"
                    value={state.country_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="modal-footer">
              <button 
             type="submit"
              // onClick={() =>
                // history.push({ pathname: `/countries1` }) } 
              ></button>

              {/* <button type="submit" value="save"> </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
