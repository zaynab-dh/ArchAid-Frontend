import { Link } from "react-router-dom";

export const AdminPage = (props) => {
  return (
    <div  className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Admin Page</h2>
        </div>
        <div className='row'>
          <div className='col-xs-6 col-md-3'>

                  <label htmlFor="" >
                      <Link to={"/addcountry"}><button  className="addbutton" name="findrules" value="find rules" >Add Country</button></Link>
                  </label>

                  <label htmlFor="" style={{ display: "block" }}>
                      <Link to={"/addcity"}><button  className="addbutton" name="projecttest" value="project test" >Add City</button></Link>
                  </label>

                  <label htmlFor="" style={{ display: "block" }}>
                      <Link to={"/addzone"}><button  className="addbutton" name="projecttest" value="project test" >Add Zone</button></Link>
                  </label>

                  <label htmlFor="" style={{ display: "block" }}>
                      <Link to={"/addproperty"}><button  className="addbutton" name="projecttest" value="project test" >Add Property</button></Link>
                  </label>
            </div>
        </div>
      </div>
    </div>
  )
}
export default AdminPage;

