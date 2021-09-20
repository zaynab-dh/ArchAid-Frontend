import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    <div >

      <h4>Add new country</h4>
      <form class="pt-3" onSubmit={handleCreate} action="" >
        <div class="form-group">
          <input onChange={handleChange} type="text" class="form-control form-control-lg" name='country_name' value={state.country_name} id="country_name" placeholder="country name" />
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Add">Add</button>
        </div>
      </form>

    </div>
  );
}

export default Country;
