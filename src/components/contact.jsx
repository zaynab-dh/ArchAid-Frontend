import { useState } from 'react'
import emailjs from 'emailjs-com'
import API from "../API";
import { useHistory } from "react-router-dom";
import axios from 'axios';

// const initialState = {
//   name: '',
//   email: '',
//   message: '',
// }
export const Contact = (props) => {
  const history = useHistory();
  // const [{ name, email, message }, setState] = useState(initialState)

  const [state, updateState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function setState(nextState) {
    updateState((previousState) => ({
      ...previousState,
      ...nextState,
    }));
  };

  function handleChange(e) {
    let { name, value } = e.target;
    setState({ [name]: value });
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setState((prevState) => ({ ...prevState, [name]: value }))
  // }
  // const clearState = () => setState({ ...initialState })

  const clearState = () => setState({ name: "",
  email: "",
  message: "",})

  const handleSubmit=async(e)=> {
    e.preventDefault();

    let reqBody = {
        name: state.name,
        email: state.email,
        message: state.message,
      };

      await axios.post('http://localhost:8080/contacts', reqBody)
      // .then(() => {
      //   history.push('/contacts')
      // })

      
        clearState()
      

      // await API.post(`contacts`, reqBody).then(
      //   history.push({ pathname: "/contacts" })
      // );
    }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name, email, message)
  //   emailjs
  //     .sendForm(
  //       'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         clearState()
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }
  return (
    <div>
      <div id='contact'>
        <div className='container form-control1'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={state.name}
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={state.email}
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    value={state.message}
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                Tripoli, Lebanon
                {/* {props.data ? props.data.address : 'loading'} */}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                0096177777777
                {/* {props.data ? props.data.phone : 'loading'} */}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                zaynab.dhaybi@gmail.com
                {/* {props.data ? props.data.email : 'loading'} */}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
