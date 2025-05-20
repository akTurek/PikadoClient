import React from 'react'
import "./gameLayout.scss"
import { Outlet } from 'react-router-dom'

const GameLayout = () => {
  return (
    <div className="gameLayoutcard">
        <div className="topGL">

        </div>
        <div className="bottomGL">
            <div className="outGL">
                <Outlet/>
            </div>
            <div className="barCardGL">

            </div>
        </div>
    </div>
  )
}

export default GameLayout