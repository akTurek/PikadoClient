import React, { useContext, useState } from 'react'
import "./players.scss"
import Player from "../player/Player.jsx"
import { GameContext } from '../../context/GameContext.js'
import { makeRequest } from '../../helpers/axios.js'
import { useQuery } from '@tanstack/react-query';

const Players = ({ }) => {

    const { gameContext } = useContext(GameContext)

    const [players, setPlayers] = useState([])


    const getPlayers = async () => {
        try {
            const res = await makeRequest.get(`/game/getplayers/${gameContext.gameId}`)
            return res.data;
        } catch (error) {
            throw error;
        }
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ['players'],
        queryFn: () => getPlayers(),
        onSuccess: (data) => {
            setPlayers([...data].sort((a, b) => Number(a.place) - Number(b.place)));
        },
        refetchInterval: 1000,
    })

    if (isLoading) return <div>Loading Players...</div>;
    if (isError) return <div>Error loading Players.</div>;





    return (
        <div className="playersCard">
            {players.map((player) => (
                <Player player={player} key={player.playerId} />
            ))}
        </div>
    )
}

export default Players