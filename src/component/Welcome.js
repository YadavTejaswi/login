import React from 'react'
import { NavLink } from "react-router-dom";
// import s  from './Login';

export default function Welcome() {
    return (
        <div>
            <h1 className='container text-center'>Welcome</h1>
            <h2>name-<span>{localStorage.getItem("fullname")}</span></h2>
            <h2>email-<span>{localStorage.getItem("Email")}</span> </h2>
            <h2>password-<span>{localStorage.getItem("Password")}</span> </h2>
            <div className="col-12 text-center ">
                <NavLink to="/"><button className="btn btn-danger con-bt" type="submit">Logout</button></NavLink>
            </div>
        </div>
    )
}
