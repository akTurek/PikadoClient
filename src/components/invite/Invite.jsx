import React, { useContext } from 'react'
import "./invite.scss"
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext'

const Invite = ({ invite }) => {

    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const { getGameData } = useContext(GameContext)


    //////
    //Accept game invite
    //////
    const handleAcc = async () => {

        try {
            await getGameData(invite.id)
            navigate(`/play/${invite.game_id}`)
        } catch (error) {

        }

    }


    //////
    //Decline game invite
    //////
    const handleDec = async () => {

        try {
            const res = await makeRequest.put(`/invites/dec/${invite.id}`)
        } catch (error) {

        }

    }

    const muatationDecline = useMutation({
        mutationFn: handleDec,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['invites'] })
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const handleDecClick = () => {
        muatationDecline.mutate();
    }


    return (
        <div className="inviteCard">
            <span>Game: {invite.id}</span>
            <div className="rightICard">
                <button onClick={() => handleAcc()}>Accept</button>
                <button onClick={() => handleDecClick()}>Decline</button>
            </div>
        </div>
    )
}

export default Invite