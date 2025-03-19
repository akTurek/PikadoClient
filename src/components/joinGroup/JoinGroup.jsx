import React from 'react'
import "./joinGroup.scss"

const JoinGroup = ({foundGroup}) => {
  return (
    <div className='cardJoinGroup'>
        <div className="up">
            <img src="https://icon2.cleanpng.com/20231228/czc/transparent-pink-flamingo-pink-flamingo-cartoon-with-black-beak-closed-1710949833207.webp" alt="" />
            <h1>{foundGroup.name}</h1>
        </div>
        <div className="down">
            <span>Password</span>
            <input type="text" />
            <button>Join</button>
        </div>

    </div>
  )
}

export default JoinGroup