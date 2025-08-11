import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./friendePage.scss"
import Friends from '../../components/friends/Friends'
import DownBar from '../../components/downBar/DownBar'
import { InviteList } from '../../context/InviteList';
import { useNavigate, useParams } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import { RiGamepadLine } from "react-icons/ri";



const FriendePage = () => {

  const { sendInvites } = useContext(InviteList)
  const { gameContext, setGameContext } = useContext(GameContext)

  const navigate = useNavigate();

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
    <div className="friendePage">
      <div className="friendeCompGP">
        <Friends />
      </div>
      <div className="downBarCompGP">
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
      </div>

    </div>
  )
}

export default FriendePage