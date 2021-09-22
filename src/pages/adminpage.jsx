import { Link } from "react-router-dom";

export const AdminPage = (props) => {
  return (
    <div  className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Admin Page</h2>
        </div>
        <div className='container1'>
          <div className='container2'>
            <div >
              <div className='col-xs-6 col-md-3'>

                      <label htmlFor="" >
                          <Link to={"/addcountry"}><button  className="addbutton" name="addcountry" value="add country" >Add Country</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addcity"}><button  className="addbutton" name="addcity" value="add city" >Add City</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addzone"}><button  className="addbutton" name="addzone" value="add zone" >Add Zone</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addproperty"}><button  className="addbutton" name="addproperty" value="add property" >Add Property</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addrule"}><button  className="addbutton" name="addrule" value="add rule" >Add Rule</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addzonerule"}><button  className="addbutton" name="addzonerule" value="add zonerule" >Add zone rule value</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addcategory"}><button  className="addbutton" name="addcategory" value="add category" >Add category</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addcondition"}><button  className="addbutton" name="addcondition" value="add condition" >Add condition</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addrulevariants"}><button  className="addbutton" name="addrulevariants" value="add rulevariants" >Add Rulevariants</button></Link>
                      </label>
                </div>
            </div>
            <div >
              <div className='col-xs-6 col-md-3'>

                      <label htmlFor="" >
                          <Link to={"/countries1"}><button  className="addbutton1" name="addcountry" value="add country" >Countries</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addcity"}><button  className="addbutton1" name="addcity" value="add city" >Add City</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addzone"}><button  className="addbutton1" name="addzone" value="add zone" >Add Zone</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addproperty"}><button  className="addbutton1" name="addproperty" value="add property" >Add Property</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addrule"}><button  className="addbutton1" name="addrule" value="add rule" >Add Rule</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addzonerule"}><button  className="addbutton1" name="addzonerule" value="add zonerule" >Add zone rule value</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addcategory"}><button  className="addbutton1" name="addcategory" value="add category" >Add category</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addcondition"}><button  className="addbutton1" name="addcondition" value="add condition" >Add condition</button></Link>
                      </label>

                      <label htmlFor="" style={{ display: "block" }}>
                          <Link to={"/addrulevariants"}><button  className="addbutton1" name="addrulevariants" value="add rulevariants" >Add Rulevariants</button></Link>
                      </label>
                </div>
            </div>
          </div>
          <label htmlFor="" style={{ display: "block" }} className="cancellabel" >
            <Link to={"/"}><button  className="addbutton2" name="cancel" value="cancel" >Cancel</button></Link>
          </label>
        </div>
      </div>
    </div>
  )
}
export default AdminPage;

