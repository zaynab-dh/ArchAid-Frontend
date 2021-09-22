import { useEffect, useState } from 'react';

const ProjectTest = () => {

    return ( 
        <div>
            <h4>Test your project</h4>
            <form class="pt-3" 
            // onSubmit={handleValidate} 
            action="" >
                <div class="form-group">
                    <input 
                    // onChange={handleChange} 
                    type="text" class="form-control form-control-lg" name='city_name' 
                    // value={state.city_name} 
                    id="city_name" placeholder="city name" />
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Add">Add</button>
                </div>
            </form>

        </div>
     );
}
 
export default ProjectTest;