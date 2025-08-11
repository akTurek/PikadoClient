import React, { useEffect, useState } from "react";
import "./numberStatisticac.scss";
import { makeRequest } from "../../helpers/axios";

const NumberStatisticac = () => {
    const [stats, setStats] = useState({
        num1st: null,
        winRate: null,
        averagePlace: null,
        avgPointsPerThrow: null,
        hotM: null,
        hotS: null
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStat = async () => {
            try {
                const { data } = await makeRequest.get("/stat/ns");
                setStats(data);
            } catch (err) {
                console.error("Failed to load stats", err);
            } finally {
                setLoading(false);
            }
        };
        getStat();
    }, []);



    return (
        <div className="numStatCard">
            <div className="numStatItem">
                <div className="numStatTop"><span>Win Rate</span></div>
                <div className="numStatBot">
                    {loading ? "…" : <span>{stats.winRate}%</span>}
                </div>
            </div>

            <div className="numStatItem">
                <div className="numStatTop"><span>Num. 1st</span></div>
                <div className="numStatBot">
                    {loading ? "…" : <span>{stats.num1st}</span>}
                </div>
            </div>

            <div className="numStatItem">
                <div className="numStatTop"><span>Average Place</span></div>
                <div className="numStatBot">
                    {loading ? "…" : <span>{stats.averagePlace}</span>}
                </div>
            </div>

            <div className="numStatItem">
                <div className="numStatTop"><span>Avg Throw</span></div>
                <div className="numStatBot">
                    {loading ? "…" : <span>{stats.avgPointsPerThrow}</span>}
                </div>
            </div>
            <div className="numStatItem">
                <div className="numStatTop"><span>HotSpot </span></div>
                <div className="numStatBot">
                    {loading ? "…" : <span>{stats.hotM} :{stats.hotM}</span>}
                </div>
            </div>
        </div>
    );
};

export default NumberStatisticac;
