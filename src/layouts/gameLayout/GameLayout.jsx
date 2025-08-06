import React, { useContext, useEffect } from 'react'
import "./gameLayout.scss"
import { Outlet } from 'react-router-dom'
import GameNavBar from '../../components/gameNavBar/GameNavBar'
import GameBar from '../../components/gameBar/GameBar'
import { GameContext } from '../../context/GameContext'

const GameLayout = () => {

  const { gameContext, setGameContext } = useContext(GameContext)




  return (
    <div className="gameLayoutcard">
      <div className="topGL">
        <GameNavBar />
      </div>
      <div className="bottomGL">
        <div className="outGL">
          <Outlet />
        </div>
        <div className="barCardGL">
          {gameContext.gameStatus == "active" && <GameBar />}

        </div>
      </div>
    </div>
  )
}

export default GameLayout