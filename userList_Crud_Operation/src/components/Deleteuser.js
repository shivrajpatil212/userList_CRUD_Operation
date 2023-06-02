import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import apiPath from '../apiPath';

export default function Deleteuser() {

    let { userEmail } = useParams();
    let navigate = useNavigate()
    // console.log("userEmail",userEmail);

    useEffect(() => {
        const deleteUser = async () => {
          try {
            // http://65.0.93.119:4000/remove
            const response = await fetch(apiPath + 'remove', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: userEmail }),
            });
    
            const data = await response.json();
            // console.log(data);
    
            navigate('/');
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        deleteUser();
      }, [navigate, userEmail]);
    

    return (
        // <h2>Delete User</h2>
        <></>
    )
}
