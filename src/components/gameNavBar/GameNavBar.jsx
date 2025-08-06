import React from 'react'
import "./gameNavBar.scss"
import { MdOutlineCancel } from "react-icons/md";
import { CiLogout } from "react-icons/ci";


const GameNavBar = () => {
    const gameStatus = "Waiting for start"
    const gameStatus2 = "loby"
    const gameRoll = "admin"

    return (
        <div className="gameNavBar">
            <span>{gameStatus}</span>
            {gameRoll === "admin" ? (
                <div className="adminCenter">
                    <div className="itemAGNB">
                        <MdOutlineCancel className='icon' />
                        <span>Start Game</span>
                    </div>
                    <div className="itemAGNB">
                        <MdOutlineCancel className='icon' />
                        <span>Cancel Game</span>
                    </div>
                </div>

            ) : (
                <div className="itemGNB">
                    <CiLogout className='icon' />
                    <span>Leave Game</span>
                </div>

            )}

        </div>
    )
}

export default GameNavBar