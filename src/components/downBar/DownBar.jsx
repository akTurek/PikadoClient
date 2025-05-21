import React, { useContext } from 'react'
import "./downBar.scss"
import { RiGamepadLine } from "react-icons/ri";
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { makeRequest } from '../../helpers/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CurrentGroup } from '../../context/CurrentGroup';

const DownBar = ({selectedMembers}) => {

  const queryClient = useQueryClient();

  const {groupId} = useParams();

  const {currentGroup} = useContext(CurrentGroup)

  const navigate = useNavigate();

  //////
  //LEAVE group fun
  //////
  const leaveGroup = async () => {

    try {
    
      const res = await makeRequest.delete(`/members/leave/${currentGroup.id}`)
      console.log(res.data)

    } catch (error) {
      throw error
    }
  }

  const mutationLeave = useMutation({
    mutationFn: leaveGroup,

    onSuccess:()=> {
      queryClient.invalidateQueries({queryKey:['members', currentGroup.id]})
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
    
      const res = await makeRequest.delete(`/group/delete/${currentGroup.id}`)
      console.log(res.data)

    } catch (error) {
      throw error
    }
  }

  const mutationDelete = useMutation({
    mutationFn: deleteGroup,

    onSuccess:()=> {
      queryClient.invalidateQueries({queryKey:['members', currentGroup.id]})
      navigate("/")

    },
    onError:(error)=>{
      console.log(error)
    }
  })

  const handleDelete = () =>{
    mutationDelete.mutate();
  }

  //////
  //Handle invite
  /////
  const handleInvite = ()=>{
    console.log(selectedMembers)
  }


  return (
    <div className="cardDownBar">
        <div className="itemDB" onClick={handleInvite}>
            <RiGamepadLine className='icon'/>
            <span>Invite For Game</span>
        </div>
        <div className="itemDB">
            <RiGamepadLine className='icon'/>
            <span>Group ID: {currentGroup.id}</span>
        </div>
        {currentGroup.role === 'admin' ? (
            <div className="itemDB" onClick={() => handleDelete()}>
              <IoIosLogOut className='icon'/>
              <span>Delete</span>
            </div>
            ) : (
            <div className="itemDB" onClick={() => handleLeave()}>
              <IoIosLogOut className='icon'/>
              <span>Leave</span>
            </div>
          )}
      </div>
  )
}

export default DownBar