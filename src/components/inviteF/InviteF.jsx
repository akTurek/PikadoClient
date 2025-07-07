import React from 'react'
import "./inviteF.scss"

import { makeRequest } from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';

const InviteF = ({invite}) => {

    const navigate = useNavigate()

    const handleAcc = async()=>{

        try {
            const res = await makeRequest.put(`/friends/acc/${invite.id}`)
            navigate(`/`)
        } catch (error) {
            
        }

    }

    const handleDec = async()=>{

        try {
            const res = await makeRequest.put(`/friends/dec/${invite.id}`)
            navigate(`/`)
        } catch (error) {
            
        }

    }

  console.log(invite.game_id)
  return (
    <div className="inviteCardF">
        <span>Friend request {invite.username}</span>
        <div className="rightICardF">
            <button onClick={()=>handleAcc()}>Accept</button>
            <button onClick={()=>handleDec()}>Decline</button>
        </div>
    </div>
  )
}

export default InviteF