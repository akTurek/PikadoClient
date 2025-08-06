import React, { useContext } from 'react'
import "./players.scss"
import Player from "../player/Player.jsx"
import { GameContext } from '../../context/GameContext.js'


const Players = ({ }) => {





    return (
        <div className="playersCard">
            {players.map((player) => (
                <Player player={player} key={player.id} />
            ))}
        </div>
    )
}

export default Players