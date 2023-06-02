import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import apiPath from '../apiPath';


export default function Edituser() {

    var navigate = useNavigate();
    var [user, setUser] = useState({});

    useEffect(() => {
        const editData = localStorage.getItem('editData');

        if (editData) {
            setUser(JSON.parse(editData));
        }

    }, []);
    // console.log("newUser", user);

    var myfuncForAll = function (ev) {
        // console.log(ev);
        // console.log(ev.target.value);

        setUser({ ...user, [ev.target.name]: ev.target.value })

    }


    var submitData = function(ev){
        ev.preventDefault();    
        // console.log("USer",user);
        // http://65.0.93.119:4000/update
        fetch(apiPath + 'update' , {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(res=>res.json()).then(val=>{
            // console.log("submitUSer",val);
            navigate('/');
        }).catch(err=>(
            console.log(err)
        ))
    }

    return (
        <div className='container text-center'>
            <h2>Edit product</h2>

            <form onSubmit={submitData}>

                <input name='firstname' value={user.firstname} onChange={(ev) => { myfuncForAll(ev) }} type="text" className='form-control' placeholder='firstname' /> <br />

                <input name='lastname' value={user.lastname} onChange={(ev) => { myfuncForAll(ev) }} type="text" className='form-control' placeholder='lastname' /> <br />

                <input name='age' value={user.age} onChange={(ev) => { myfuncForAll(ev) }} type="text" className='form-control' placeholder='age' /> <br />

                <input name='email' value={user.email} onChange={(ev) => { myfuncForAll(ev) }} type="text" className='form-control' placeholder='email' /> <br />

                <input name='phoneNumber' value={user.phoneNumber} onChange={(ev) => { myfuncForAll(ev) }} type="text" className='form-control' placeholder='phoneNumber' /> <br />

                <input name='password' value={user.password} onChange={(ev) => { myfuncForAll(ev) }} type="text" className='form-control' placeholder='password' /> <br />

                <button className='btn btn-warning'>Update</button>

            </form>

        </div>
    )
}
