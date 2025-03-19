import React from 'react'
import "./popUpMS.scss"
import { RiVipCrownLine } from "react-icons/ri";
import { IoPersonRemoveSharp } from "react-icons/io5";

const PopUpMS = () => {
  return (
     <div className="cardPopUpMS">
        <div className="itemMS">
            <RiVipCrownLine className='extendFunPOP'/>
            <span>Make Ovner</span>
        </div>
        <div className="itemMS">
            <IoPersonRemoveSharp className='extendFunPOP'/>
            <span>Remove</span>
        </div>
     </div>
  )
}

export default PopUpMS