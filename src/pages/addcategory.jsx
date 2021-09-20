import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Category = () => {
  let history = useHistory();


  const [state, setState] = useState({
    category_name: ''
  });

  async function handleCreate(e) {
    e.preventDefault();

    let reqBody = {
        category_name: state.category_name
    };

    await axios.post('http://localhost:8080/categories', reqBody)
      .then(history.push('/categories'))

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

      <h4>Add new category</h4>
      <form class="pt-3" onSubmit={handleCreate} action="" >
        <div class="form-group">
          <input onChange={handleChange} type="text" class="form-control form-control-lg" name='category_name' value={state.category_name} id="category_name" placeholder="category name" />
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Add">Add</button>
        </div>
      </form>

    </div>
  );
}

export default Category;
