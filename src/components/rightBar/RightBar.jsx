import React, { useEffect, useState } from 'react'
import  "./rightBar.scss"
import { makeRequest } from '../../helpers/axios'
import Invite from '../invite/Invite'

const RightBar = () => {

const[invites, setInvites] = useState([])

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


console.log(invites)
  return (
    <div className='boxRB'>
        <div className="cardGamesRB">
            <div className="topRB">
                <h1>GAMES</h1>
            </div>
        </div>
        <div className="cardGamesRB">
            <div className="topRB">
                <h1>Invites</h1>
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