import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiPath from '../apiPath';

export default function Home() {

  var [api, setApi] = useState([]);
  let navigate = useNavigate()

  // http://65.0.93.119:4000/fetchusers
  useEffect(() => {
    fetch(apiPath + 'fetchusers')
      .then(res => res.json())
      .then(val => {
        // console.log(val.data);
        setApi(val.data)
      })
  }, [])
  // console.log(api);
 
  
  const handleEditClick = (event, item) => {
    // Get the data from the <td> tags
    const firstname = event.target.getAttribute('data-firstname');
    const lastname = event.target.getAttribute('data-lastname');
    const age = event.target.getAttribute('data-age');
    const email = event.target.getAttribute('data-email');
    const phoneNumber = event.target.getAttribute('data-phoneNumber');

    // Save the data to local storage
    localStorage.setItem('editData', JSON.stringify({
      firstname,
      lastname,
      age,
      email,
      phoneNumber,
    }));

    navigate('/editUser/' + item._id);
  };

  return (
    <div className='container text-center'>
      <h2>UserList</h2>
      <hr />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email Id</th>
            <th scope="col">Phone No</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>

          </tr>
        </thead>
        <tbody>
          {
            api && api.map((item) =>
              <tr>
                <td>{item.firstname}&nbsp;{item.lastname}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <button className='del-btn btn btn-sm btn-danger'>
                    <Link to={"/deleteUser/" + item.email}>Delete</Link>
                  </button>
                </td>
                <td>
                  <button className='edit-btn btn btn-sm btn-info'>
                    <Link to={"/editUser"} 
                    onClick={(event) => handleEditClick(event, item)}
                    data-firstname={item.firstname}
                    data-lastname={item.lastname}
                    data-age={item.age}
                    data-email={item.email}
                    data-phoneNumber={item.phoneNumber}
                    >Edit</Link>
                  </button>
                </td>
              </tr>
            )
          }

        </tbody>
      </table>
      <button className='edit-btn btn btn-sm btn-info'>
        <Link to={"/adduser"}>ADD USER</Link>
      </button>
    </div>
  )
}
