import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProjectTest = () => {

    const history = useHistory();
    const [state, setState] = useState({ 
        code: '',
        siteArea: '',
        frontRetraction: '',
        lateralRetraction: '',
        backRetraction: '',
        groundFloorHeight: '',
        typicalFloorHeight: '',
        numberOfFloors: '',
        groundFloorArea: '',
        typicalFloorArea: '',
        roofArea: '',
        balconiesArea: '',
        stairsArea: '',
        elevatorsArea: '',
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleValidate = ()=> {

    }

    return ( 
        <div className='text-center'>
            <div>
                <div className='col-md-10 col-md-offset-1 section-title'>
                    <h2>Test your project</h2>
                </div>
                <center><form className="pt-3" onSubmit={handleValidate} action="" >
                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='code' value={state.code} id="code" placeholder="Zone name" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='siteArea' value={state.siteArea} id="siteArea" placeholder="Site area" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='frontRetraction' value={state.frontRetraction} id="frontRetraction" placeholder="Front Retraction" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='lateralRetraction' value={state.lateralRetraction} id="lateralRetraction" placeholder="Lateral Retraction" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='backRetraction' value={state.backRetraction} id="backRetraction" placeholder="Back Retraction" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='groundFloorHeight' value={state.groundFloorHeight} id="groundFloorHeight" placeholder="Ground Floor Height" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='typicalFloorHeight' value={state.typicalFloorHeight} id="typicalFloorHeight" placeholder="Typical Floor Height" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='numberOfFloors' value={state.numberOfFloors} id="numberOfFloors" placeholder="Number Of Floors" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='groundFloorArea' value={state.groundFloorArea} id="groundFloorArea" placeholder="Ground Floor Area" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='typicalFloorArea' value={state.typicalFloorArea} id="typicalFloorArea" placeholder="Typical Floor Area" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='roofArea' value={state.roofArea} id="roofArea" placeholder="Roof Area" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='balconiesArea' value={state.balconiesArea} id="balconiesArea" placeholder="Balconies Area" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='stairsArea' value={state.stairsArea} id="stairsArea" placeholder="Stairs Area" />
                    </div>

                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control form-control-lg" name='elevatorsArea' value={state.elevatorsArea} id="elevatorsArea" placeholder="Elevators Area" />
                    </div>

                    <div className="mt-3">
                        <button type="submit" className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Submit">Submit</button>
                    </div>
                </form></center>
            </div>

        </div>
     );
}
 
export default ProjectTest;