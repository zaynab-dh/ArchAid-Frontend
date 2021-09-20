import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt, faBuilding } from '@fortawesome/free-solid-svg-icons'


export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='buttonscontainer'>
              {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '} */}

              <label htmlFor="" >
                <Link to="/findrules">
                  <button
                    className="addbutton"
                    name="findrules"
                    value="find rules"
                    style={{
                      marginRight: 8
                    }}
                  >
                    <FontAwesomeIcon icon={faListAlt} />
                    know your zone's rules
                  </button>
                </Link>
              </label>

              {/* <h3>know your site's rules</h3>  */}

              <label htmlFor="" style={{ display: "block" }}>
                <Link to={"/projecttest"}>
                  <button
                    className="addbutton"
                    name="projecttest"
                    value="project test"
                  >
                    <FontAwesomeIcon icon={faBuilding} />
                    Test your project
                  </button>
                </Link>
              </label>

            </div>
            {/* <h3>Test your work</h3>  */}
            {/* <h3>{d.title}</h3> */}
            {/* <p>{d.text}</p> */}
            {/* </div> */}
            {/* ))
            : 'Loading...'} */}
          </div>
        </div>
      </div>
    </div>
  )
}
