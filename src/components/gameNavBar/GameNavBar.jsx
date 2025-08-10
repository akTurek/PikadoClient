import React, { useContext } from 'react'
import "./gameNavBar.scss"
import { MdOutlineCancel } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { GameContext } from '../../context/GameContext';
import { AuthContext } from '../../context/AuthProvider';
import { makeRequest } from '../../helpers/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';


const GameNavBar = () => {

    const { gameContext, setGameContext } = useContext(GameContext)
    const { currentUser } = useContext(AuthContext)
    const queryClient = useQueryClient();

    const setGameStatus = async (status) => {

        try {

            const res = await makeRequest.put(`/game/changeStatus/${gameContext.gameId}`, { status })
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


    const leaveGame = async (status) => {

        try {

            const res = await makeRequest.delite(`/game/leave/${gameContext.gameId}`)
            setGameContext(null)

        } catch (error) {
            throw error
        }
    }



    return (
        <div className="gameNavBar">
            <span>{gameContext.gameStatus}</span>
            {gameContext.isAdmin ? (
                <div className="adminCenter">
                    {gameContext.gameStatus === 'waiting' && (
                        <div className="itemAGNB" onClick={() => handleChangeStatus('active')}>
                            <span>Start Game</span>
                        </div>
                    )}
                    {gameContext.gameStatus === 'active' && (
                        <div className="itemAGNB" onClick={() => handleChangeStatus('finished')}>
                            <span>Finish Game</span>
                        </div>
                    )}
                    <div className="itemAGNB" onClick={() => handleChangeStatus("cancelled")}>
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