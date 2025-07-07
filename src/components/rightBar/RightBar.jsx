import React, { useEffect, useState } from 'react'
import  "./rightBar.scss"
import { makeRequest } from '../../helpers/axios'
import Invite from '../invite/Invite'
import InviteF from '../inviteF/InviteF'

const RightBar = () => {

const[invites, setInvites] = useState([])

const[invitesF, setInvitesF] = useState([])

const getInvites =async() =>{

    try {
       const res = await makeRequest.get("invites/get") 
       setInvites(res.data)
       console.log("Moja povabila ", res.data)
    } catch (error) {
        
    }

}

useEffect(()=>{
    getInvites();
},[]);


const getFriendInvites =async() =>{

    try {
       const res = await makeRequest.get("friends/getfriendsinvites") 
       setInvitesF(res.data)
       console.log("Moja F povabila ", res.data)
    } catch (error) {
        
    }

}

useEffect(()=>{
    getFriendInvites();
},[]);



console.log(invites)
  return (
    <div className='boxRB'>
        <div className="cardGamesRB">
            <div className="topRB">
                <h1>Friend Invites</h1>
            </div>
            <div className="downRB">
                {invites && invitesF.map((invite)=>(
                    <InviteF invite={invite} key={invite.id}/>
                ))}
            </div>
        </div>
        <div className="cardGamesRB">
            <div className="topRB">
                <h1>Game Invites</h1>
            </div>
            <div className="downRB">
                {invites && invites.map((invite)=>(
                    <Invite invite={invite} key={invite.id}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default RightBar