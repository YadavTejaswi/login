import React, { useState } from 'react'
import { NavLink } from "react-router-dom";


function Login() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${data.fullname}.  Email:${data.email}. Password: ${data.password}`);
    console.log(data.fullname);
    localStorage.setItem("fullname", data.fullname);
    localStorage.setItem("Email", data.email);
    localStorage.setItem("Password", data.password);
  };
  return (
    <div className='container shadow p-1 pb-4 bg-white rounded my-5 w-50'>
      <div className="my-2">
        <h1 className="text-center text-primary con-h3">Login</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-2">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="enter your name" />
              </div>

              <div className="mb-2">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"
                  id="exampleFormControlInput2"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com" />
              </div>

              <div className="mb-2">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"
                  id="exampleFormControlInput3"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  placeholder="password" />
              </div>

              <div className="col-12 text-center ">
                <button className="btn btn-primary con-bt mx-3" onClick={() => window.location.href = '/welcome'} value="submit" type="submit">Login</button>

                {/* <NavLink to="/welcome">Welcome </NavLink> */}
                <span className='mx-1'></span>
                <NavLink to="/Registration">Registration </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;