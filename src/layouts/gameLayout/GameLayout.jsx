import React, { useContext, useEffect } from 'react'
import "./gameLayout.scss"
import { Outlet, useNavigate } from 'react-router-dom'
import GameNavBar from '../../components/gameNavBar/GameNavBar'
import GameBar from '../../components/gameBar/GameBar'
import { GameContext } from '../../context/GameContext'
import { makeRequest } from '../../helpers/axios'
import { useQuery } from '@tanstack/react-query';

const GameLayout = () => {

  const { gameContext, setGameContext } = useContext(GameContext)
  const navigate = useNavigate();


  const getGameContext = async () => {

    try {
      console.log(gameContext.gameId + "-------------------gameId-----------------------------" + gameContext.playerId)

      const res = await makeRequest.get(`game/getinfo`, {
        params: {
          gameId: gameContext.gameId,
          playerId: gameContext.playerId,
        },
      });
      return res.data;
    } catch (error) {
      return []
    }

  }


  useEffect(() => {
    if (gameContext?.gameStatus === "cancelled") {
      navigate("/");
    }
  }, [navigate, gameContext?.gameStatus]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['game'],
    queryFn: () => getGameContext(),
    onSuccess: (data) => {
      setGameContext(data)
    },
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
          {gameContext.gameStatus == "active" && gameContext.turn && <GameBar />}

        </div>
      </div>
    </div>
  )
}

export default GameLayout