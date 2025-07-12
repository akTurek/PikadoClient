import React from 'react'
import "./numberStatisticac.scss"

const NumberStatisticac = () => {
    return (
        <div className="numStatCard">
            <div className="numStatItem">
                <div className="numStatTop">
                    <span>Win Rate</span>
                </div>
                <div className="numStatBot">
                    <span>0.46</span>
                </div>
            </div>
            <div className="numStatItem">
                <div className="numStatTop">
                    <span>Avrage Place</span>
                </div>
                <div className="numStatBot">
                    <span>2</span>
                </div>
            </div>
            <div className="numStatItem">
                <div className="numStatTop">
                    <span>Avrage Round Score</span>
                </div>
                <div className="numStatBot">
                    <span>35</span>
                </div>
            </div>
        </div>
    )
}

export default NumberStatisticac