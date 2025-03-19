import React from 'react'
import "./group.scss"
import { useNavigate } from 'react-router-dom';

const Group = ({group}) => {

const navigate = useNavigate();

const handleClick = (e)=>{
  navigate(`/group/${group.id}`)
}
    

  return (
    <div className='cardGroup' onClick={handleClick}>
        <div className="up">
            <img src="https://icon2.cleanpng.com/20231228/czc/transparent-pink-flamingo-pink-flamingo-cartoon-with-black-beak-closed-1710949833207.webp" alt="" />
            <h1>{group.name}</h1>
        </div>
        <div className="down">
        </div>

    </div>
  )
}

export default Group