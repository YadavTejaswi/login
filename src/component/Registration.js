import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
    setSubmitted(false);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || contact === '' || address === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      let st = [name, email, password, contact, address];
      console.log(st);
      //  alert(st);
    }
  };
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h6 className='text-success'>User {name} successfully registered!!</h6>
      </div>

    );
  };
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h6 className='text-warning'>Please enter all the fields</h6>
      </div>
    );
  };
  return (
    <div className='container text-center shadow p-1 pb-4 bg-white rounded my-5 w-50'>
      <h1 className='text-dark'>Registration</h1><br></br>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form>
        <label className="label">Name: &nbsp;</label>
        <input onChange={handleName} className="input"
          value={name} type="text" /><br /><br />

        <label className="label">Contact: &nbsp;</label>
        <input onChange={handleContact} className="input"
          value={contact} type="text" /><br /><br />

        <label className="label">Address: &nbsp;</label>
        < input type="textarea" onChange={handleAddress} className="input"
          value={address} /><br /><br />

        <label className="label">Email: &nbsp;</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" /><br /><br />

        <label className="label">Password: &nbsp;</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" /><br /><br />

        <button onClick={handleSubmit} className="btn btn-success mx-4" type="submit">
          Submit
        </button>
        {/* <NavLink to="/welcome">  
              Welcome 
                </NavLink>   */}
        <span className='mx-1'></span>
        <NavLink to="/">
          login
        </NavLink>
      </form>
    </div>
  )
}
