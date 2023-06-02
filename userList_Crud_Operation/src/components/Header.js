import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div className='container header'>
            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/adduser">Add User</Link>
                </li>
            </ul>
        </div>
    )
}
