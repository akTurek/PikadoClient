import React, { useState } from 'react'
import './register.scss'
import { makeRequest } from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    username:"",
    password:"",
    email:"",
  });

  const handleChange =(e)=>{
    setRegisterData(prev=>({...prev,[e.target.name]:e.target.value}))
    console.log(registerData)
  };

  const handleRegistration = async(e) =>{
    e.preventDefault()

    try{
      const response = await makeRequest.post("/users/register", registerData);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
    navigate("/login")
   
  }



  return (
    <div className='register'>
        <div className="card">
           <div className="left">
                <div className="inputs">
                    <input name ='username' type="text" placeholder='username' onChange={handleChange}/>
                    <input name ='password' type="password" placeholder='********' onChange={handleChange}/>
                    <input name ='email' type="email" placeholder='your@email.something' onChange={handleChange}/>
                </div>
                <div className="buttons">
                    <button onClick={handleRegistration}>Register</button>
                    <button onClick={(e)=>navigate("/login")}>Login</button>
                </div>
           </div>
           <div className="right">
            <h1>PikadoPlay</h1>
            <span>Play darts with friends anytime, anywhere. Log in, challenge opponents, and track your scores. Let the game begin!</span>
           </div>
        </div>
    </div>
  )
}

export default Register