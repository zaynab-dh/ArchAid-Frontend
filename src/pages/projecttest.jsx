import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { IntNavigation } from "../components/intNavigation";
import Swal from 'sweetalert2'

const ProjectTest = () => {

    const history = useHistory();
    const [rules, setRules] = useState([]);
    const [selZone, setSelZone] = useState('');
    const [state, setState] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        window.scrollTo({ top: 0 });
        let getRules = async () => {
            let url = `http://localhost:8080/rules/getFields`;
            let res = await fetch(url);
            let result = await res.json();
            if (result.success) {
                setRules(result.response);
            }
        }
        getRules();
    }, [])


    const handleChange = (e) => {
        let { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    let validate = () => { }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (validate()) {
        //     Swal.fire({
        //         title: 'Custom width, padding, background.',
        //         width: 600,
        //         padding: '3em',
        //         background: '#fff url(/images/trees.png)',
        //         backdrop: `
        //           rgba(0,0,123,0.4)
        //           url("/images/nyan-cat.gif")
        //           left top
        //           no-repeat
        //         `
        //     });
        // }
        let url = `http://localhost:8080/zonerules/projectTest/${selZone}`
        let { response } = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        }).then(res => res.json());
        setErrors(response);
    }

    return (
        <>
            <IntNavigation />
            <div className='text-center padding'>
                <div>
                    <div className='col-md-10 col-md-offset-1 section-title section-title1'>
                        <h2>Test your project</h2>
                    </div>
                    <center>
                        <form className="pt-3" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name='code'
                                    value={state.code}
                                    onChange={e => setSelZone(e.target.value)}
                                    className="form-control form-control-lg"
                                    placeholder="Zone name"
                                />
                            </div>
                            {rules.map(rule => (
                                <div className="form-group">
                                    <input
                                        type="number"
                                        name={rule._id}
                                        step={0.1}
                                        value={state[rule._id]}
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                        placeholder={rule.rule_name}
                                    />
                                    {errors[rule._id]}
                                </div>
                            ))}

                            {/* <div className="form-group">
                                <input onChange={handleChange} type="text" className="form-control form-control-lg" name='code' value={state.code} id="code" placeholder="Zone name" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="number" className="form-control form-control-lg" name='siteArea' value={state.siteArea} id="siteArea" placeholder="Site area (m2)" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="text" className="form-control form-control-lg" name='frontRetraction' value={state.frontRetraction} id="frontRetraction" placeholder="Front Retraction (m)" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="text" className="form-control form-control-lg" name='lateralRetraction' value={state.lateralRetraction} id="lateralRetraction" placeholder="Lateral Retraction (m)" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="text" className="form-control form-control-lg" name='backRetraction' value={state.backRetraction} id="backRetraction" placeholder="Back Retraction (m)" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="number" className="form-control form-control-lg" name='groundFloorHeight' value={state.groundFloorHeight} id="groundFloorHeight" placeholder="Ground Floor Height (m)" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="number" className="form-control form-control-lg" name='typicalFloorHeight' value={state.typicalFloorHeight} id="typicalFloorHeight" placeholder="Typical Floor Height (m)" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="number" className="form-control form-control-lg" name='numberOfFloors' value={state.numberOfFloors} id="numberOfFloors" placeholder="Number Of Floors" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="number" className="form-control form-control-lg" name='groundFloorArea' value={state.groundFloorArea} id="groundFloorArea" placeholder="Ground Floor Area (m2)" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="number" className="form-control form-control-lg" name='typicalFloorArea' value={state.typicalFloorArea} id="typicalFloorArea" placeholder="Typical Floor Area (m2)" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="number" className="form-control form-control-lg" name='balconiesArea' value={state.balconiesArea} id="balconiesArea" placeholder="Balconies Area (m2)" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="number" className="form-control form-control-lg" name='stairsArea' value={state.stairsArea} id="stairsArea" placeholder="Stairs Area (m2)" />
                            </div>

                            <div className="form-group">
                                <input onChange={handleChange} type="number" className="form-control form-control-lg" name='elevatorsArea' value={state.elevatorsArea} id="elevatorsArea" placeholder="Elevators Area (m2)" />
                            </div> */}

                            <div className="mt-3">
                                <button type="submit" className="btn btn-block btn-width btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Submit">Submit</button>
                            </div>
                        </form>
                    </center>
                    <div class="mt-3">
                        <center><Link to={"/"}><button class="btn btn-block btn-width btn-gradient-primary btn-lg font-weight-medium auth-form-btn" value="Back">Back</button></Link></center>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectTest;