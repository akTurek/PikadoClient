import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const GuiStats = () => {
    const data = [
        { date: "2024-12-23", averageTurn: 23, topTurn: 26 },
        { date: "2024-12-24", averageTurn: 24, topTurn: 29 },
        { date: "2024-12-25", averageTurn: 22, topTurn: 30 },
        { date: "2024-12-26", averageTurn: 25, topTurn: 28 },
        { date: "2024-12-27", averageTurn: 21, topTurn: 27 },
        { date: "2024-12-28", averageTurn: 23, topTurn: 26 },
    ]

    return (
        <div className="guiStatCard">
            <div style={{ width: '100%', height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="averageTurn" stroke="#8884d8" />
                        <Line type="monotone" dataKey="topTurn" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default GuiStats
