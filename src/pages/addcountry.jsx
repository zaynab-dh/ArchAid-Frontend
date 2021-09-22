import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const Country = () => {
  let history = useHistory();


  const [state, setState] = useState({
    country_name: ''
  });

  async function handleCreate(e) {
    e.preventDefault();

    let reqBody = {
      country_name: state.country_name
    };

    await axios.post('http://localhost:8080/countries', reqBody)
      .then(history.push('/countries'))

  }

  const handleChange = (e) => {

    let { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className='text-center'>

      <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Add new country</h2>
      </div>
      <center><form class="pt-3" onSubmit={handleCreate} action="" >
        <div class="form-group">
          <input onChange={handleChange} type="text" class="form-control form-control-lg" name='country_name' value={state.country_name} id="country_name" placeholder="country name" />
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Add">Add</button>
        </div>
      </form>
      </center>
      <br/>
      <div class="mt-3">
        <center><Link to={"/adminpage"}><button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Back">Back</button></Link></center>
      </div>

    </div>
  );
}

export default Country;
