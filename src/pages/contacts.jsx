import { faSortAlphaDownAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import API from "../API";
import { LogoutNav } from "../components/logoutNav";
import Swal from 'sweetalert2'


export default function Contacts() {
  //Get All countries
  const [contacts, setContacts] = useState([]);
  const [selCont, setSelCont] = useState(null);

  useEffect(() => {
    let getContacts = async () => {
      let url = 'http://localhost:8080/contacts'
      let res = await fetch(url);
      let result = await res.json();
      if (result.success) {
        setContacts(result.response);
        if (result.response && result.response[0]) {
          setSelCont(result.response[0]._id)
        }
      }
    }
    getContacts();
  }, [])




  let handleDelete = async (id) => {
    const willDelete = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#fbb23d',
      cancelButtonColor: 'rgb(37, 35, 35)',
      confirmButtonText: 'Yes, delete it!'

    });
    if (willDelete.isConfirmed) {
      try {
        let res = await API.delete(`contacts/${id}`);

        let filter = [...contacts].filter((contacts) => contacts._id !== id);
        setContacts(filter);
        const result = res.data.message;
        if (res.data.isConfirmed) {
          await Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      } catch (e) {
        console.log(e);
      }
    }
  }


  return (
    <><LogoutNav />
      <div className='text-center padding'>

        <div class="col-sm-6">
          <div className='col-md-10 col-md-offset-1 section-title section-title1 section-title3'>
            <h2>Contacts</h2>
          </div>

          <div class="col-sm-6">
              <Link to="/adminpage" className="btn btnn2 btnn3" data-toggle="modal">
                <i class="bx bxs-plus-circle bx-burst"></i>
                <span>Cancel</span>
              </Link>
            </div> 
        </div>

        <table class="table table-striped table-hover">
          <thead>
            <tr>
            
                <th>Contact Name </th>
                <th>Email</th>
                <th>Message</th>
                    
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                
                <td>
                  <button onClick={() => handleDelete(contact._id)}>Delete</button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>

      </div>
    </>
  )
}
