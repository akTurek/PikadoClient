import React from 'react'
import "./player.scss"

const Player = ({player}) => {
  return (
    <div className={player.turn ? "turn" : "noTurn"}>
        
        <div className="left">
            <img src="https://icon2.cleanpng.com/20231228/czc/transparent-pink-flamingo-pink-flamingo-cartoon-with-black-beak-closed-1710949833207.webp" alt="" />
            <span>{player.name}</span>
        </div>
        <div className="right">
            <span>{player.score}</span>
        </div>
    </div>
  )
}

export default Player