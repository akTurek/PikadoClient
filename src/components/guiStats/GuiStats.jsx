import React, { useEffect, useState, useMemo } from "react";
import { makeRequest } from "../../helpers/axios";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const GuiStats = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStat = async () => {
            try {
                const res = await makeRequest.get("/stat/gs");
                // ensure numbers + sort by date
                const parsed = (res.data || []).map(r => ({
                    date: r.date, // e.g. "2024-12-23"
                    averageTurn: Number(r.averageTurn),
                    topTurn: Number(r.topTurn),
                })).sort((a, b) => new Date(a.date) - new Date(b.date));
                setRows(parsed);
            } catch (err) {
                console.error("Failed to load stats", err);
                setRows([]);
            } finally {
                setLoading(false);
            }
        };
        getStat();
    }, []);

    const formatDate = (d) =>
        new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric" });

    if (loading) return <div className="guiStatCard">Loading…</div>;
    if (!rows.length) return <div className="guiStatCard">No data yet</div>;

    return (
        <div className="guiStatCard" style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={rows} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="date"
                        tickFormatter={formatDate}
                        tick={{ angle: -45, textAnchor: 'end' }} // rotacija 45°
                        height={70}                               // več prostora spodaj
                        interval={0}                              // prikaži vse ticke (po želji)
                        tickMargin={8}                            // malo odmika
                    />
                    <YAxis allowDecimals={false} />
                    <Tooltip formatter={(v) => Number(v).toFixed(2)} labelFormatter={formatDate} />
                    <Legend />
                    <Line type="monotone" dataKey="averageTurn" stroke="#8884d8" dot={false} strokeWidth={2} />
                    <Line type="monotone" dataKey="topTurn" stroke="#82ca9d" dot={false} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GuiStats;
