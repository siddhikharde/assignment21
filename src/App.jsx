import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import "./App.css"
import { Link } from 'react-router'
function FormHandling() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [optionalSubject, setOptionalSubject] = useState([]);
  const handleOptionalChange = (subject) => {
    setOptionalSubject((prev) => {
      if (prev.includes(subject)) {
        return prev.filter((s) => s !== subject);
      }
      return [...prev, subject];
    });
  };
  const saveInfo = () => {
   

    if (name.length > 2 && name.length < 20) {
      localStorage.setItem("name", name);

    }
    localStorage.setItem("optionalSubject",JSON.stringify(optionalSubject))
    localStorage.setItem("age", age);
    localStorage.setItem("city", city);
    localStorage.setItem("gender", gender);
   

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
      setError("Name should be greter than two charecters");

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
      setAge(" ");
    }
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
    else {
      setName("User");
    }
    const storedOptional = localStorage.getItem("optionalSubject");
    if (storedOptional) {
      
        setOptionalSubject(JSON.parse(storedOptional));
    }
    else {
        setOptionalSubject([]);
    
    }

  }, [])
  return (

    <div>
      <div className='showData'>
        <p className='name'>Registration Form</p>
      </div>
      <div className='main-input-con'>
        <div>
          <div className='inputCon'>
            <input type='text' className='input' required placeholder='Enter Your Name' onChange={(e) => {
              setName(e.target.value)

            }}
              value={name}

            />
            <p className={`error ${error ? "show" : ""}`}>{error}</p>
            <input type='number' required className='input' placeholder='Enter Your Age' onChange={(e) => {
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
              <option value="mumbai">Mumbai</option>
              <option value="banglore">Banglore</option>
              <option value="chennai">Chennai</option>
              <option value="delhi">Delhi</option>
              <option value="hydrabad">Hydrabad</option>
            </select>
          </div>
        </div>

        <div className='radio-btn'>
          <div><span>Male </span>
            <input type="radio" name="gender" value="male" onChange={(e) => {
              if (e.target.checked) {
                setGender(e.target.value)
              }

            }}
              checked={gender === "male"} /></div>
          <div>
            <span>
              Female  </span>
            <input type="radio" name="gender" value="Female" onChange={(e) => {
              if (e.target.checked) {
                setGender(e.target.value);
              }
            }}
              checked={gender === "Female"} />
          </div>
          </div>
          <div className='checkBox'>
            <p>Select optional Subject</p>
           <div className="checkBox-input-con">
             <label>
               <input type="checkbox" value="Marathi" checked={optionalSubject.includes("Marathi")} onChange={() => handleOptionalChange("Marathi")} /> Marathi
             </label>
            <label>
              <input type="checkbox" value="Hindi" checked={optionalSubject.includes("Hindi")} onChange={() => handleOptionalChange("Hindi")} /> Hindi
            </label>
            <label>
              <input type="checkbox" value="Science" checked={optionalSubject.includes("Science")} onChange={() => handleOptionalChange("Science")} /> Science
            </label>
            <label>
              <input type="checkbox" value="Maths" checked={optionalSubject.includes("Maths")} onChange={() => handleOptionalChange("Maths")} /> Maths
            </label>
            <label>
              <input type="checkbox" value="History" checked={optionalSubject.includes("History")} onChange={() => handleOptionalChange("History")} /> History
            </label>

           </div>
                      </div>

        <div className='btn-con'>
          <Link to={name.length > 2 && name !== "User" && age !== "" && city ? '/registrationCompleted' : '#'} className={`btn ${name.length < 2 ? "btnDisable" : null}`} onClick={()=>{
            if(name.length > 2 && name !== "User" && age !== "" && city){
              saveInfo();
              toast.success('Registration Successful');
            }
            else{
              toast.error("Please fill all the details")
            }
          }}>Register</Link>
          <button className='btn' onClick={() => {
            setName("")
            setAge("")
            setOptionalSubject([])
            localStorage.setItem("name", "")
            localStorage.setItem("age", "")
            localStorage.setItem("city", "")
            localStorage.setItem("gender", "")
            localStorage.setItem("optionalSubject", JSON.stringify([]))
          }}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default FormHandling
