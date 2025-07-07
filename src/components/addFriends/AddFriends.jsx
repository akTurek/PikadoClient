import React, { useState } from 'react'
import "./addFriends.scss"
import { makeRequest } from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';

const AddFriends = ({foundFriend}) => {

    const navigate = useNavigate();

    
    const handleClick = async (e) => {
      e.preventDefault();
  
      try {
  
        const res = await makeRequest.post(`/friends/addfriend/${foundFriend.id}`);
        console.log(res.data)
        navigate("/")
      } catch (error) {
        console.log(error);
      }
  
    }

    console.log("my found friend "+ foundFriend.id)


  return (
    <div className='cardAddFriends'>
        <div className="leftAFF">
            <img src="https://icon2.cleanpng.com/20231228/czc/transparent-pink-flamingo-pink-flamingo-cartoon-with-black-beak-closed-1710949833207.webp" alt="" />
            <h1>{foundFriend.username}</h1>
        </div>
        <div className="rightAFF">
            <button onClick={handleClick}>Send Request</button>
        </div>

    </div>
  )
}

export default AddFriends