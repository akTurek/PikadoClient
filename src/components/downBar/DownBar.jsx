import React from 'react'
import "./downBar.scss"
import { RiGamepadLine } from "react-icons/ri";
import { useParams } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { makeRequest } from '../../helpers/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const DownBar = () => {

  const queryClient = useQueryClient();

  const {groupId} = useParams();

  //////
  //LEAVE group fun
  //////
  const leaveGroup = async () => {

    try {
    
      const res = await makeRequest.delete(`/members/leave/${groupId}`)
      console.log(res.data)

    } catch (error) {
      throw error
    }
  }

  const mutationLeave = useMutation({
    mutationFn: leaveGroup,

    onSuccess:()=> {
      queryClient.invalidateQueries({queryKey:['members', groupId]})
    },
    onError:(error)=>{
      console.log(error)
    }
  })

  const handleLeave = () =>{
    mutationLeave.mutate();
  }

  //////
  //DELETE group fun
  //////
  const deleteGroup = async () => {

    try {
    
      const res = await makeRequest.delete(`/members/delete/${groupId}`)
      console.log(res.data)

    } catch (error) {
      throw error
    }
  }

  const mutationDelete = useMutation({
    mutationFn: deleteGroup,

    onSuccess:()=> {
      queryClient.invalidateQueries({queryKey:['members', groupId]})
    },
    onError:(error)=>{
      console.log(error)
    }
  })

  const handleDelete = () =>{
    mutationDelete.mutate();
  }









  return (
    <div className="cardDownBar">
        <div className="itemDB">
            <RiGamepadLine className='icon'/>
            <span>Invite For Game</span>
        </div>
        <div className="itemDB">
            <RiGamepadLine className='icon'/>
            <span>Group ID: {groupId}</span>
        </div>
        <div className="itemDB" onClick = { ()=> handleLeave()}>
            <IoIosLogOut className='icon'/>
            <span>Leave</span>
        </div>
        
    </div>
  )
}

export default DownBar