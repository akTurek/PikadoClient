import React, { useContext, useState } from 'react'
import "./player.scss"
import { GameContext } from '../../context/GameContext';
import { IoTrophyOutline } from "react-icons/io5";

const Player = ({ player }) => {

  const playerClass = player.turn ? "turn"
    : player.score == 0
      ? "finished"
      : "noTurn";


  const { gameContext } = useContext(GameContext);

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }



  return (
    <div className={playerClass} onClick={handleClick}>

      <div className="upPlayer">
        <div className="left">
          <img src="https://icon2.cleanpng.com/20231228/czc/transparent-pink-flamingo-pink-flamingo-cartoon-with-black-beak-closed-1710949833207.webp" alt="" />

          <span>{player.username}</span>
        </div>
        <div className="right">
          {player.score > 0 ? (
            <span>S:{player.score}</span>
          ) : (
            <span className="score">
              <IoTrophyOutline className="trophy" />
              S:{player.score}
            </span>
          )}

        </div>
      </div>
      {clicked && gameContext.isAdmin && (
        <div className="downPlayer">
          <span>Kick</span>
        </div>
      )}

    </div>
  )
}

export default Player