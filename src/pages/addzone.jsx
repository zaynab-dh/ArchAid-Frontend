import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cities from '../components/cities';
import { Link } from "react-router-dom";
import { LogoutNav } from "../components/logoutNav";

const Zone = () => {

    const history = useHistory();
    const [state, setState] = useState({ code: '',description: '', cityId: '' });

    async function handleCreate(e) {
        e.preventDefault();
        await axios.post('http://localhost:8080/zones', state).then(() => {
            history.push('/zones')
        });
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <>
      <LogoutNav />
        <div className='text-center'>

      <div className='col-md-10 col-md-offset-1 section-title section-title1'>
          <h2>Add new zone</h2>
      </div>
      <center><form class="pt-3" onSubmit={handleCreate} action="" >
                <div class="form-group">
                    <input onChange={handleChange} type="text" class="form-control form-control-lg" name='code' value={state.code} id="code" placeholder="code" />
                </div>
                <div class="form-group">
                    <input onChange={handleChange} type="text" class="form-control form-control-lg" name='description' value={state.description} id="code" placeholder="description" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Choose a city</label>
                    <Cities name="cityId" value={state.cityId} onChange={handleChange} />
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn btn-block btn-width btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Add">Add</button>
                </div>
            </form></center>
      <br/>
      <div class="mt-3">
        <center><Link to={"/adminpage"}><button type="submit" class="btn btn-block btn-width btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Back">Back</button></Link></center>
      </div>
        </div>
        </>
    );
}

export default Zone;