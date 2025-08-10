import React from 'react'
import "./inviteF.scss"

import { makeRequest } from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const InviteF = ({ invite }) => {

    const navigate = useNavigate()
    const queryClient = useQueryClient();

    //////
    //Accept frend request
    //////
    const handleAcc = async () => {

        try {
            const res = await makeRequest.put(`/friends/acc/${invite.id}`)
            navigate(`/`)
        } catch (error) {

        }

    }

    const muatationHandleAcc = useMutation({
        mutationFn: handleAcc,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['invitesF'] })
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const handleAccClick = () => {
        muatationHandleAcc.mutate();
    }

    //////
    //Decline frend request
    //////
    const handleDec = async () => {

        try {
            const res = await makeRequest.put(`/friends/dec/${invite.id}`)
            navigate(`/`)
        } catch (error) {

        }

    }

    const muatationHandleDec = useMutation({
        mutationFn: handleDec,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['invitesF'] })
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const handleDecClick = () => {
        muatationHandleDec.mutate();
    }

    console.log(invite.game_id)
    return (
        <div className="inviteCardF">
            <span>Friend request {invite.username}</span>
            <div className="rightICardF">
                <button onClick={() => handleAccClick()}>Accept</button>
                <button onClick={() => handleDecClick()}>Decline</button>
            </div>
        </div>
    )
}

export default InviteF