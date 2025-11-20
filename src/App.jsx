import React, { use, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import "./App.css"
function FormHandling() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const saveInfo = () => {
    if (name.length > 2 && name.length < 20) {
      localStorage.setItem("name", name);
    
    }
   localStorage.setItem("age", age);
   localStorage.setItem("city", city);
   localStorage.setItem("gender", gender);
  toast.success('Successfully Saved!');

  }
  useEffect(() => {
    const storeName = localStorage.getItem("name");
    const storedAge = localStorage.getItem("age");
    if (storeName) {
      setName(storeName);
      setAge(storedAge);
    }
  }, [])
  useEffect(() => {
    if (name.length < 2) {
      setError("Name should be grete than two charecters");
   
    }
    else if (name.length > 20) {
      setError("name should be small");
    }
    else {
      setError("");
    }

  }, [name])
  useEffect(() => {
    const storedCity = localStorage.getItem("city");
    if (storedCity) {
      setCity(storedCity);
    }
    const storedGender = localStorage.getItem("gender");
    if (storedGender) {
      setGender(storedGender);
    }
    const storedAge = localStorage.getItem("age");
    if (storedAge) {
      setAge(storedAge);
    }
    else {
      setAge("__");
    }
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
    else {
      setName("User");
    }

  },[])
  return (
    
    <div>
      <div className='showData'>
       <p className='name'>{`Hello! I am ${name} and I am ${age} years old. Belongs to ${city}`}</p>
    </div>
      <div className='main-input-con'>
        <div>
          <div className='inputCon'>
            <input type='text' className='input' placeholder='Enter Your Name' onChange={(e) => {
              setName(e.target.value)

            }}
              value={name}

            />
            <p className={`error ${error ? "show" : ""}`}>{error}</p>
            <input type='number' className='input' placeholder='Enter Your Age' onChange={(e) => {
              setAge(e.target.value)

            }}
              value={age}

            />

          </div>
        <div className='select-con'>
              <select value={city} onChange={(e) => {
              setCity(e.target.value)
            }} >
              <option value="Nagpur">Nagpur</option>
              <option value="pune">Pune</option>
            </select>
        </div>
        </div>

        <div className='radio-btn'>
          <div><span>Male </span>
          <input type="radio" name="gender" value="male" onChange={(e)=>{
            if(e.target.checked){
              setGender(e.target.value)
            }

          }}
          checked={gender === "male"} /></div>
          <div>
            <span>
            Female  </span>
          <input type="radio" name="gender" value="Female" onChange={(e)=>{
            if(e.target.checked){
              setGender(e.target.value);
            }
          }} 
          checked={gender === "Female"} />
          </div></div>

        <div className='btn-con'>
          <button className={`btn ${name.length < 2 ? "btnDisable" : null}`} onClick={saveInfo}>Save</button>
          <button className='btn' onClick={() => {
            setName("")
            setAge("")
            localStorage.setItem("name", "")
            localStorage.setItem("age", "")
            localStorage.setItem("city", "")
            localStorage.setItem("gender", "")
          }}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default FormHandling
