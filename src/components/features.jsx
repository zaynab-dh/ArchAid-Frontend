import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt, faBuilding, faClipboardList } from '@fortawesome/free-solid-svg-icons'


export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>

        {/* <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href='/findrules'>
                      <FontAwesomeIcon icon={faListAlt} className="rules"/>
                      <i className="fas fa-clipboard-list"></i>
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
          </div> */}

        <div className='row'>
          <div className='col-xs-12'>
            <div className='buttonscontainer'>

              <label htmlFor="" >
                <Link to="/findrules">
                  <button
                    className="addbutton3"
                    name="findrules"
                    value="find rules"
                    style={{
                      marginRight: 8
                    }}
                  >
                    {/* <FontAwesomeIcon icon={faListAlt} size='3x' /> */}
                    <FontAwesomeIcon icon={faClipboardList} size='3x' />
                    {/* know your zone's rules */}
                  </button>
                </Link>
                <h5>know your zone's rules</h5>
              </label>

              

              <label htmlFor="" style={{ display: "block" }}>
                <Link to={"/projecttest1"}>
                  <button
                    className="addbutton3"
                    name="projecttest"
                    value="project test"
                  >
                    <FontAwesomeIcon icon={faBuilding} size='3x' />
                    {/* Test your project */}
                  </button>
                </Link>
                <h5>Test your project</h5>
              </label>
              

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
