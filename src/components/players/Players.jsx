import React from 'react'
import "./players.scss"
import Player from "../player/Player.jsx"


const Players = ({}) => {

    const players= [
    {
        name: "GiNeckBite",
        score: 0,
        turn: false,
        id: 1,
        place:1
    },
    {
        name: "PlayerTwo",
        score: 10,
        turn: true,
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
       {
        name: "GiNeckBite",
        score: 0,
        turn: false,
        id: 1,
        place:1
    },
    {
        name: "PlayerTwo",
        score: 10,
        turn: true,
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
     {
        name: "PlayerTwo",
        score: 10,
        turn: true,
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