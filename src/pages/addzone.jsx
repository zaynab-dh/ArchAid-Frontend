import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cities from '../components/cities';

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
        <div>
            <h4>Add new zone</h4>
            <form class="pt-3" onSubmit={handleCreate} action="" >
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
                    <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Add">Add</button>
                </div>
            </form>
        </div>
    );
}

export default Zone;