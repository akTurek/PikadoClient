import React, { useState } from 'react'
import "./findGroup.scss"
import { FaMagnifyingGlass } from "react-icons/fa6";
import JoinGroup from '../../components/joinGroup/JoinGroup';
import { makeRequest } from '../../helpers/axios';


const FindGroup = () => {

  const [foundGroup, setFoundGroup] = useState(null);

  const [searchGroup, setSearchGroup] = useState({
    groupName: ""
  });

  const handleChange = (e) => {
    setSearchGroup(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(searchGroup)

  }


  const handleClick = async (e) => {
    e.preventDefault();

    try {

      const res = await makeRequest.get("/group/findgroup", {
        params: { groupName: searchGroup.groupName },
        withCredentials: true
      });

      console.log(res.data)
      setFoundGroup(res.data)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="findG">
      <div className="form">
        <div className="itemFG">
          <span>Group Name</span>
          <div className="sercheBar">
            <input name="groupName" type="text" onChange={handleChange} />
            <button onClick={handleClick} ><FaMagnifyingGlass /></button>
          </div>
        </div>
        <div className="results">

        </div>
      </div>
      {foundGroup && <JoinGroup foundGroup={foundGroup} />}


    </div>
  )
}

export default FindGroup