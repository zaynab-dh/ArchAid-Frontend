import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Zones from '../components/zones';

const Property = () => {

    const history = useHistory();
    const [state, setState] = useState({ property_name: '', zoneId: '' });

    async function handleCreate(e) {
        e.preventDefault();
        await axios.post('http://localhost:8080/properties', state).then(() => {
            history.push('/properties')
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
            <h4>Add new property</h4>
            <form class="pt-3" onSubmit={handleCreate} action="" >
                <div class="form-group">
                    <input onChange={handleChange} type="text" class="form-control form-control-lg" name='property_name' value={state.property_name} id="property_name" placeholder="property name" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Choose a zone</label>
                    <Zones name="zoneId" value={state.zoneId} onChange={handleChange} />
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Add">Add</button>
                </div>
            </form>
        </div>
    );
}

export default Property;