import React from 'react'
import "./players.scss"
import Player from "../player/Player.jsx"


const Players = ({}) => {

    const players= [
    {
        name: "GiNeckBite",
        score: 13,
        turn: true,
        id: 1
    },
    {
        name: "PlayerTwo",
        score: 10,
        turn: false,
        id: 2
    },
    {
        name: "PlayerThree",
        score: 8,
        turn: false,
        id: 3
    },
    {
        name: "PlayerFour",
        score: 7,
        turn: false,
        id: 4645,
    },
    
]    


    return (
        <div className="playersCard">
            {players.map((player) =>(
              <Player player={player} key={player.id}/>
            ))}
        </div>
  )
}

export default Players