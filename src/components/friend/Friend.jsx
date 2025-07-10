import React, { useContext, useEffect, useState } from 'react'
import "./friend.scss"
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../helpers/axios';
import { RiVipCrownLine } from "react-icons/ri";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { IoTrophyOutline } from "react-icons/io5";


const Friend = ({ friend }) => {



  //   const queryClient = useQueryClient();

  // //////
  // //Kick player logic
  // //////

  //    const kickPlayer = async () =>{
  //     try {
  //         const res = await makeRequest.delete("/members/kick", {data : {
  //         memberId: member.id,
  //         groupId
  //       }})
  //       console.log(res.data)
  //       return res.data;
  //     } catch (error) {
  //       throw error
  //     }
  //   }

  //   const muatationKickPlayer = useMutation({
  //     mutationFn:kickPlayer,

  //     onSuccess:()=> {
  //       queryClient.invalidateQueries({queryKey:['members', groupId]})
  //     },
  //     onError:(error)=>{
  //       console.log(error)
  //     }
  //   })

  //   const handleKickPlayer = () => {
  //     //setTest(false)
  //     muatationKickPlayer.mutate()
  //   }



  const [test, setTest] = useState(false)

  //   const owner = currentGroup.userGroupId == member.id;

  //   const {handleToggleSelect} = useContext(InviteList)

  //   const handleInviteList =() =>{
  //     handleToggleSelect(member.userId);
  //   }

  return (
    <div className="cardMember">
      <div className="upM">
        <div className="leftM">


          <input type="checkbox" />

          <img src="https://icon2.cleanpng.com/20231228/czc/transparent-pink-flamingo-pink-flamingo-cartoon-with-black-beak-closed-1710949833207.webp" alt="" />
          <h1>{friend.username}</h1>
          <div className="wins">
            <IoTrophyOutline className='icon' />
            <span>{friend.num1st}</span>
          </div>
        </div>
        <div className="rightM" onClick={(e) => { setTest(!test) }}>
          {test ? <FaArrowUp className='extendFun' /> : <FaArrowDown className='extendFun' />}
        </div>
      </div>
      <div className="downM">
        {test &&
          <div className="cardPopUpMS">
            <div className="itemMS">
              <RiVipCrownLine className='extendFunPOP' />
              <span>Make Owner</span>
            </div>
            <div className="itemMS">
              <IoPersonRemoveSharp className='extendFunPOP' />
              <span>Remove</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Friend