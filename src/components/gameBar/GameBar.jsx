import React from 'react'
import "./gameBar.scss"

const GameBar = () => {

    
  return (
    <div className="gameBarCard">
        <div className="inputs">
            <input type="text"/>
            <span>x</span>
            <input type="text" />
        </div>

        <div className="inputs">
            <input type="text" />
            <span>x</span>
            <input type="text" />
        </div>

        <div className="inputs">
            <input type="text" />
            <span>x</span>
            <input type="text" />
        </div>

        <button>Enter</button>

    </div>
  )
}

export default GameBar