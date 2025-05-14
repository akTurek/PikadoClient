import React, { useContext, useEffect, useState } from 'react'
import './login.scss'
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const {logInFun, currentUser}= useContext(AuthContext);

  const [logInData, setLogInData] = useState({
    username:"",
    password:"",
  });

  const handleChange =(e)=>{
    setLogInData(prev=>({...prev,[e.target.name]:e.target.value}))
    console.log(logInData)
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await logInFun(logInData);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (currentUser) {
        navigate("/");
    }
}, [currentUser,navigate]);


  return (
    <div className='login'>
        <div className="card">
           <div className="left">
                <div className="inputs">
                    <input name ='username' type="text" placeholder='username' onChange={handleChange}/>
                    <input name ='password' type="password" placeholder='********' onChange={handleChange}/>
                </div>
                <div className="buttons">
                    <button onClick={handleClick}>Log In</button>
                    <button onClick ={(e)=>navigate("/register")}>Register</button>
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

export default Login