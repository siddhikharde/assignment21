import React from 'react'
import "./RegistrationCompleted.css"
import { Link } from 'react-router'
import "./App.jsx"
function RegistrationCompleted() {
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");
  const city = localStorage.getItem("city");
  return (
    <div className='registration-completed'>
       <div className='showData'>
       <p>{`Name: ${name}`}</p>
        <p>{`Age: ${age}`}</p>
        <p>{`City: ${city}`}</p>
        
    </div>
        <h1>Registration Completed Successfully!</h1>
        <p>Thank you for registering.</p>
        <Link className="btn" to="/">Go Back to Home</Link>
    </div>
  )
}

export default RegistrationCompleted
