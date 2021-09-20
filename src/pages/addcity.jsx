import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Countries from '../components/countries';

const City = () => {

    const history = useHistory();
    const [state, setState] = useState({ city_name: '', countryId: '' });

    async function handleCreate(e) {
        e.preventDefault();
        await axios.post('http://localhost:8080/cities', state).then(() => {
            history.push('/cities')
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
        <div>
            <h4>Add new city</h4>
            <form class="pt-3" onSubmit={handleCreate} action="" >
                <div class="form-group">
                    <input onChange={handleChange} type="text" class="form-control form-control-lg" name='city_name' value={state.city_name} id="city_name" placeholder="city name" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Choose a country</label>
                    <Countries name="countryId" value={state.countryId} onChange={handleChange} />
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Add">Add</button>
                </div>
            </form>
        </div>
    );
}

export default City;