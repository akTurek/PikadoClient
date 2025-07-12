import React, { useState } from 'react'
import "./joinGroup.scss"
import { makeRequest } from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';

const JoinGroup = ({ foundGroup }) => {

  const navigate = useNavigate();

  const [joinData, setjoinData] = useState({
    password: "",
    groupId: foundGroup.id
  });


  const handleChange = (e) => {
    setjoinData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(joinData)

  }


  const handleClick = async (e) => {
    e.preventDefault();

    try {

      const res = await makeRequest.post("/group/joingroup", joinData);
      console.log(res.data)
      navigate(`/group/${foundGroup.id}`)
    } catch (error) {
      console.log(error);
    }

  }



  return (
    <div className='cardJoinGroup'>
      <div className="up">
        <img src="https://icon2.cleanpng.com/20231228/czc/transparent-pink-flamingo-pink-flamingo-cartoon-with-black-beak-closed-1710949833207.webp" alt="" />
        <h1>{foundGroup.name}</h1>
      </div>
      <div className="down">
        <span>Password</span>
        <input name="password" type="password" onChange={handleChange} />
        <button onClick={handleClick}>Join</button>
      </div>

    </div>
  )
}

export default JoinGroup