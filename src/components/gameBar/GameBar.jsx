import React, { useContext, useState } from 'react'
import "./gameBar.scss"
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../helpers/axios';
import { GameContext } from '../../context/GameContext';

const GameBar = () => {

  const queryClient = useQueryClient();
  const { gameContext } = useContext(GameContext)

  const [error, setError] = useState(null);

  const [scoreData, setScoreData] = useState({
    mul1: 1,
    score1: 1,
    mul2: 1,
    score2: 1,
    mul3: 1,
    score3: 1,
  })

  const handleChange = (e) => {
    setScoreData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(scoreData)
  };


  const allowedScores = new Set([...Array(20).keys()].map(i => i + 1).concat([25, 50]));
  const isValidMul = (m) => [1, 2, 3].includes(Number(m));
  const isValidScore = (s) => allowedScores.has(Number(s));

  const noTripleBull = (s, m) => (s === 25 || s === 50) ? Number(m) <= 2 : true;

  const validateAll = (d) => {
    const mulOk =
      isValidMul(d.mul1) && isValidMul(d.mul2) && isValidMul(d.mul3);
    const scoreOk =
      isValidScore(d.score1) && isValidScore(d.score2) && isValidScore(d.score3);
    const bullOk =
      noTripleBull(d.score1, d.mul1) &&
      noTripleBull(d.score2, d.mul2) &&
      noTripleBull(d.score3, d.mul3);
    return mulOk && scoreOk && bullOk;
  };

  //////
  //Update score
  //////

  const updateScore = async () => {
    try {
      const res = await makeRequest.put(`/game/updatescore/${gameContext.gameId}/${gameContext.playerId}`, scoreData)
      console.log(res.data)
      return res.data;
    } catch (error) {
      throw error
    }
  }

  const muatationUpdateScore = useMutation({
    mutationFn: updateScore,

    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['players'] })
      queryClient.invalidateQueries({ queryKey: ['game'] })
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const handleScoreUpdate = () => {
    if (!validateAll(scoreData)) {
      setError("Neveljaven vnos");
      return;
    }
    muatationUpdateScore.mutate()
    setError(null)
  }

  return (
    <div className="gameBarCard">
      <div className="inputs">
        <input type="text" name='mul1' defaultValue={1} onChange={handleChange} />
        <span>x</span>
        <input type="text" name='score1' defaultValue={1} onChange={handleChange} />
      </div>

      <div className="inputs">
        <input type="text" name='mul2' defaultValue={1} onChange={handleChange} />
        <span>x</span>
        <input type="text" name='score2' defaultValue={1} onChange={handleChange} />
      </div>

      <div className="inputs">
        <input type="text" name='mul3' defaultValue={1} onChange={handleChange} />
        <span>x</span>
        <input type="text" name='score3' defaultValue={1} onChange={handleChange} />
      </div>
      {error && <div className="error">{error}</div>}
      <button onClick={() => handleScoreUpdate()}>Enter</button>

    </div>
  )
}

export default GameBar