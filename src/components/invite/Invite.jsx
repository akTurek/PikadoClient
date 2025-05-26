import React from 'react'
import "./invite.scss"

import { makeRequest } from '../../helpers/axios';
import { useNavigate } from 'react-router-dom';

const Invite = ({invite}) => {

    const navigate = useNavigate()

    const handleAcc = async()=>{

        try {
            const res = await makeRequest.put(`/invites/acc/${invite.id}`)
            navigate(`/play/${invite.game_id}`)
        } catch (error) {
            
        }

    }

    const handleDec = async()=>{

        try {
            const res = await makeRequest.put(`/invites/dec/${invite.id}`)
        } catch (error) {
            
        }

    }

  console.log(invite.game_id)
  return (
    <div className="inviteCard">
        <span>Game: {invite.id}</span>
        <div className="rightICard">
            <button onClick={()=>handleAcc()}>Accept</button>
            <button onClick={()=>handleDec()}>Decline</button>
        </div>
    </div>
  )
}

export default Invite