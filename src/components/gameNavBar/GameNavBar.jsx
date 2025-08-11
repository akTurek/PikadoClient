import React, { useContext } from 'react'
import "./gameNavBar.scss"
import { MdOutlineCancel } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { GameContext } from '../../context/GameContext';
import { AuthContext } from '../../context/AuthProvider';
import { makeRequest } from '../../helpers/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';


const GameNavBar = () => {

    const { gameContext, setGameContext } = useContext(GameContext)
    const { currentUser } = useContext(AuthContext)
    const queryClient = useQueryClient();
    const navigate = useNavigate()

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


    const leaveGame = async () => {

        try {
            const res = await makeRequest.delete(`/game/leave/${gameContext.gameId}/${gameContext.playerId}`)

        } catch (error) {
            throw error
        }
    }

    const handleLeave = async (e) => {
        await leaveGame()
        setGameContext(null)
        navigate("/")
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
                    {gameContext.gameStatus !== 'finished' ? (
                        <div className="itemAGNB" onClick={() => handleChangeStatus('cancelled')}>
                            <MdOutlineCancel className="icon" />
                            <span>Cancel Game</span>
                        </div>
                    ) : (
                        <div className="itemGNB" onClick={() => leaveGame()} >
                            <CiLogout className="icon" />
                            <span>Leave Game</span>
                        </div>
                    )}
                </div>


            ) : (
                <div className="itemGNB" onClick={() => leaveGame()}>
                    <CiLogout className='icon' />
                    <span>Leave Game</span>
                </div>

            )
            }

        </div >
    )
}

export default GameNavBar