import React from 'react'
import "./downBar.scss"
import { RiGamepadLine } from "react-icons/ri";
import { useParams } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";

const DownBar = () => {

const queryClient = useQueryClient();

const leaveGroup = async () => {

  try {
    
  } catch (error) {
    
  }
}




const {groupId} = useParams(); 

  return (
    <div className="cardDownBar">
        <div className="itemDB">
            <RiGamepadLine className='icon'/>
            <span>Invite For Game</span>
        </div>
        <div className="itemDB">
            <RiGamepadLine className='icon'/>
            <span>Group ID: {groupId}</span>
        </div>
        <div className="itemDB">
            <IoIosLogOut className='icon'/>
            <span>Leave</span>
        </div>
        
    </div>
  )
}

export default DownBar