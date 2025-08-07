import React, { useContext, useEffect } from 'react'
import "./gameLayout.scss"
import { Outlet } from 'react-router-dom'
import GameNavBar from '../../components/gameNavBar/GameNavBar'
import GameBar from '../../components/gameBar/GameBar'
import { GameContext } from '../../context/GameContext'
import { makeRequest } from '../../helpers/axios'
import { useQuery } from '@tanstack/react-query';

const GameLayout = () => {

  const { gameContext, setGameContext } = useContext(GameContext)



  const getGameContext = async () => {

    try {
      console.log(gameContext.gameId + "-------------------gameId-----------------------------")
      const res = await makeRequest.get(`game/getinfo/${gameContext.gameId}`)
      return res.data;
    } catch (error) {
      return []
    }

  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['game'],
    queryFn: () => getGameContext(),
    //enabled: !!gameContext?.gameId,
    onSuccess: (data) => setGameContext(data),
    refetchInterval: 1000,

  })

  return (
    <div className="gameLayoutcard">
      <div className="topGL">
        <GameNavBar />
      </div>
      <div className="bottomGL">
        <div className="outGL">
          <Outlet />
        </div>
        <div className="barCardGL">
          {gameContext.gameStatus == "active" && <GameBar />}

        </div>
      </div>
    </div>
  )
}

export default GameLayout