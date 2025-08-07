import React, { useContext } from 'react'
import "./gameNavBar.scss"
import { MdOutlineCancel } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { GameContext } from '../../context/GameContext';
import { AuthContext } from '../../context/AuthProvider';
import { makeRequest } from '../../helpers/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';


const GameNavBar = () => {

    const { gameContext } = useContext(GameContext)
    const { currentUser } = useContext(AuthContext)
    const queryClient = useQueryClient();

    const setGameStatus = async (status) => {

        try {

            const res = await makeRequest.put(`/game/start/${gameContext.gameId}`, { status })
            console.log(res.data)

        } catch (error) {
            throw error
        }
    }

    const mutationChangeStatus = useMutation({
        mutationFn: setGameStatus,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['game'] })

        },
        onError: (error) => {
            console.log(error)
        }
    })

    const handleChangeStatus = (status) => {
        mutationChangeStatus.mutate(status);
    }





    return (
        <div className="gameNavBar">
            <span>{gameContext.gameStatus}</span>
            {gameContext.ownerId === currentUser.id ? (
                <div className="adminCenter">
                    <div className="itemAGNB" onClick={() => handleChangeStatus("active")}>
                        <MdOutlineCancel className='icon' />
                        <span>Start Game</span>
                    </div>
                    <div className="itemAGNB" onClick={() => handleChangeStatus("canceled")}>
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