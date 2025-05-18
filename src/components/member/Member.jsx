import React, { useContext, useEffect, useState } from 'react'
import "./member.scss"
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../helpers/axios';
import { RiVipCrownLine } from "react-icons/ri";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { CurrentGroup } from "../../context/CurrentGroup";

const Member = ({member}) => {

  const {groupId} = useParams();
  const {currentGroup} = useContext(CurrentGroup)

  const queryClient = useQueryClient();

//////
//Transfer ownership
//////

  const makeOwner = async () =>{
    try {

      const data = {
        memberId: member.id,
        groupId
      }

      const res = await makeRequest.put("/members/newOwner", data)
      console.log(res.data)
      return res.data;
    } catch (error) {
      throw error
    }
  }

  const muatationNewOwner = useMutation({
    mutationFn:makeOwner,

    onSuccess:()=> {
      queryClient.invalidateQueries({queryKey:['members', groupId]})
    },
    onError:(error)=>{
      console.log(error)
    }
  })

  const handleNewOwner = () => {
    setTest(false)
    muatationNewOwner.mutate()
  }
//////
//Kick player logic
//////

   const kickPlayer = async () =>{
    try {
        const res = await makeRequest.delete("/members/kick", {data : {
        memberId: member.id,
        groupId
      }})
      console.log(res.data)
      return res.data;
    } catch (error) {
      throw error
    }
  }

  const muatationKickPlayer = useMutation({
    mutationFn:kickPlayer,

    onSuccess:()=> {
      queryClient.invalidateQueries({queryKey:['members', groupId]})
    },
    onError:(error)=>{
      console.log(error)
    }
  })

  const handleKickPlayer = () => {
    //setTest(false)
    muatationKickPlayer.mutate()
  }

 

  const [test, setTest] = useState(false)

  const {currentUser}= useContext(AuthContext)

  return (
    <div className="cardMember">
      <div className="upM">
        <div className="leftM">
          <input type="checkbox" />
          <img src="https://icon2.cleanpng.com/20231228/czc/transparent-pink-flamingo-pink-flamingo-cartoon-with-black-beak-closed-1710949833207.webp" alt="" />
          <h1>{member.username}</h1>
        </div>
        {currentGroup.role == "admin" && <div className="rightM" onClick={(e)=>{setTest(!test)}}>
          {test ? <FaArrowUp className='extendFun' /> : <FaArrowDown className='extendFun' />}
        </div>}
      </div>
      <div className="downM">
      {test && 
      <div className="cardPopUpMS">
      <div className="itemMS" onClick={ () => handleNewOwner()}>
          <RiVipCrownLine className='extendFunPOP'/>
          <span>Make Ovner</span>
      </div>
      <div className="itemMS" onClick={ () =>handleKickPlayer()}>
          <IoPersonRemoveSharp className='extendFunPOP'/>
          <span>Remove</span>
      </div>
    </div>
      }
      </div>
    </div>
  )
}

export default Member