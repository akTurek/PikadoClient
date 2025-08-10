import React, { useContext, useEffect } from 'react'
import "./downBar.scss"
import { RiGamepadLine } from "react-icons/ri";
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { makeRequest } from '../../helpers/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CurrentGroup } from '../../context/CurrentGroup';
import { InviteList } from '../../context/InviteList';
import { GameContext } from '../../context/GameContext';


const DownBar = () => {

  const queryClient = useQueryClient();

  const { currentGroup, setCurrentGroup } = useContext(CurrentGroup)

  const { sendInvites } = useContext(InviteList)

  const navigate = useNavigate();

  const { gameContext, setGameContext } = useContext(GameContext)



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

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members', currentGroup.id] })
      setCurrentGroup(null)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const handleLeave = () => {
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

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members', currentGroup.id] })
      navigate("/")

    },
    onError: (error) => {
      console.log(error)
    }
  })

  const handleDelete = () => {
    mutationDelete.mutate();
  }

  //////
  //Handle invite
  /////

  const handleInvites = async (type) => {
    console.log("invites send" + type)
    try {
      const gameInfo = await sendInvites(type);
      console.log("dobil         " + gameInfo)
      await setGameContext(gameInfo)

      navigate(`/play/${gameInfo.gameId}`)
    } catch (error) {

    }

  }




  return (
    <div className="cardDownBar">
      <div className="itemDB" onClick={() => handleInvites(501)}>
        <RiGamepadLine className='icon' />
        <span>501</span>
      </div>
      <div className="itemDB" onClick={() => handleInvites(301)}>
        <RiGamepadLine className='icon' />
        <span>301</span>
      </div>
      <div className="itemDB" onClick={() => handleInvites(101)}>
        <RiGamepadLine className='icon' />
        <span>101</span>
      </div>
      <div className="itemDB">
        <RiGamepadLine className='icon' />
        <span>Group ID: {currentGroup.id}</span>
      </div>
      {currentGroup.role === 'admin' ? (
        <div className="itemDB" onClick={() => handleDelete()}>
          <IoIosLogOut className='icon' />
          <span>Delete</span>
        </div>
      ) : (
        <div className="itemDB" onClick={() => handleLeave()}>
          <IoIosLogOut className='icon' />
          <span>Leave</span>
        </div>
      )}
    </div>
  )
}

export default DownBar