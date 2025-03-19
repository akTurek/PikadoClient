import React from 'react'
import "./findGroup.scss"
import { FaMagnifyingGlass } from "react-icons/fa6";
import JoinGroup from '../../components/joinGroup/JoinGroup';


const FindGroup = () => {

    const group = {id:13, name:"test"}

  return (
    <div className="findG">
        <div className="form">
            <div className="itemFG">
                <span>Group ID</span>
                <div className="sercheBar">
                <input type="text" />
                <button><FaMagnifyingGlass/></button>
                </div>
            </div>
            <div className="results">

            </div>
        </div>

        <JoinGroup foundGroup={group}/>
        
    </div>
  )
}

export default FindGroup