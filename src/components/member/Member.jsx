import React, { useEffect, useState } from 'react'
import "./member.scss"
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import PopUpMS from '../popUpMS/PopUpMS';

const Member = ({member}) => {

  

  const [test, setTest] = useState(false)

  return (
    <div className="cardMember">
      <div className="upM">
        <div className="leftM">
          <input type="checkbox" />
          <img src="https://icon2.cleanpng.com/20231228/czc/transparent-pink-flamingo-pink-flamingo-cartoon-with-black-beak-closed-1710949833207.webp" alt="" />
          <h1>{member.name}</h1>
        </div>
        <div className="rightM" onClick={(e)=>{setTest(!test)}}>
          {test ? <FaArrowUp className='extendFun' /> : <FaArrowDown className='extendFun' />}
        </div>
      </div>
      <div className="downM">
      {test && <PopUpMS/>}
      </div>
    </div>
  )
}

export default Member