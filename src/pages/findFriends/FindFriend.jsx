import React, { useState } from 'react'
import "./findFriend.scss"
import { FaMagnifyingGlass } from "react-icons/fa6";
import AddFriends from '../../components/addFriends/AddFriends';
import { makeRequest } from '../../helpers/axios';


const FindFriend = () => {

  const[foundFriend, setFoundFriend] = useState(null);

  const[searchFriend, setSearchFriend] = useState("");

  const handleChange = (e)=>{
    setSearchFriend(e.target.value);
    console.log(e.target.value);
  }


  const handleClick = async (e) => {
    e.preventDefault();

    try {

      const res = await makeRequest.get(`/friends/findfriend/${searchFriend}`);
      
      console.log(res.data)
      setFoundFriend(res.data)
      console.log("res ->"+res.data)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="cardFindF">
        <div className="form">
            <div className="itemFF">
                <span>Friend Name</span>
                <div className="sercheBar">
                <input name="searchFriend" type="text" onChange={handleChange} />
                <button onClick={handleClick} ><FaMagnifyingGlass/></button>
                </div>
            </div>
            <div className="results">
                
            </div>
        </div>
        {foundFriend && <AddFriends foundFriend={foundFriend}/>}
    </div>
  )
}

export default FindFriend