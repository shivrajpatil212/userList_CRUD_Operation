import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import CircularJSON from 'circular-json';
import apiPath from '../apiPath';


export default function Adduser() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    var navigate = useNavigate()

    var myfunc =async (formData) => {
        console.log("formData",formData);
        // "http://65.0.93.119:4000/adduser"
        await fetch(apiPath + 'adduser',{
            method:'POST',
            body: CircularJSON.stringify(formData),
            headers:{
                "content-Type":'application/json',
            }
            
        })
        .then(res=>res.json())
        .then(val=>{
            // console.log("val",val);
            navigate('/')
        })
    }

    return (
        <div className='container text-center'>
            <h2>Add User</h2>

            <form onSubmit={handleSubmit(myfunc)}>

                <input type="text" {...register('firstname', { required: true, minLength: 3 })} className='form-control ' placeholder='First Name' />
                {errors.firstname?.type === 'required' && <p role="alert">First name is required</p>}
                {errors.firstname?.type === 'minLength' && <p role="alert">First Name minLength is 3</p>}
                <br />

                <input type="text" {...register('lastname', { required: true })} className='form-control' placeholder='last Name' />
                {errors.lastname?.type === 'required' && <p role="alert">last name is required</p>}
                <br />

                <input type="text" {...register('age', { required: true })} className='form-control' placeholder='Age' />
                {errors.Age?.type === 'required' && <p role="alert"> Age is required</p>}
                <br />

                <input type="email" {...register('email', { required: true })} className='form-control' placeholder='Email' />
                {errors.email?.type === 'required' && <p role="alert"> Email is required</p>}
                <br />

                <input type="text" {...register('phoneNumber', { required: true, maxLength: 10 })} className='form-control' placeholder='Phone Number' />
                {errors.phoneNumber?.type === 'required' && <p role="alert"> Phone Number is required</p>}
                {errors.phoneNumber?.type === 'maxLength' && <p role="alert">Phone Number maxLength is 10</p>}<br />

                <input type="password" {...register('password', { required: true })} className='form-control' placeholder='Password' />
                {errors.password?.type === 'required' && <p role="alert"> Password is required</p>}
                <br />

                <button className='btn btn-warning' onClick={myfunc}>ADD</button>

            </form>
        </div>
    )
}
