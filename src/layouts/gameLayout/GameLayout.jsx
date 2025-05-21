import React from 'react'
import "./gameLayout.scss"
import { Outlet } from 'react-router-dom'
import GameNavBar from '../../components/gameNavBar/GameNavBar'
import GameBar from '../../components/gameBar/GameBar'


const GameLayout = () => {

  const gameStatus="active"

  return (
    <div className="gameLayoutcard">
        <div className="topGL">
          <GameNavBar/>
        </div>
        <div className="bottomGL">
            <div className="outGL">
                <Outlet/>
            </div>
            <div className="barCardGL">
                {gameStatus == "active" && <GameBar/>}
                
            </div>
        </div>
    </div>
  )
}

export default GameLayout