import React, { useState } from 'react'
import "./player.scss"

const Player = ({player}) => {

   const playerClass = player.turn ? "turn" 
                      : player.score == 0 
                      ? "finished" 
                      : "noTurn";

  const owner = true

  console.log(playerClass)

  const [clicked, setClicked]= useState(false)

  const handleClick = () =>{
    setClicked(!clicked)
  }



  return (
    <div className={playerClass} onClick={handleClick}>
        
        <div className="upPlayer">
          <div className="left">
            {playerClass  == "finished" && <span>{player.place}</span> }
            <img src="https://icon2.cleanpng.com/20231228/czc/transparent-pink-flamingo-pink-flamingo-cartoon-with-black-beak-closed-1710949833207.webp" alt="" />
            <span>{player.name}</span>
          </div>
          <div className="right">
            <span>{player.score}</span>
          </div>
        </div>
        {clicked && owner &&  (
          <div className="downPlayer">
              <span>Kick</span>
          </div>
        ) }
        
    </div>
  )
}

export default Player