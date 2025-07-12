
import GuiStats from "../../components/guiStats/GuiStats"
import NumberStatisticac from "../../components/numberStatisticac/NumberStatisticac"
import UserProfileCard from "../../components/userProfileCard/UserProfileCard"
import "./profile.scss"
import React, { useContext, useEffect, useState } from 'react'



const Profile = () => {
    return (
        <div className="profilePagaCard">
            <div className="profilePagaLeft">
                <UserProfileCard />
            </div>
            <div className="profilePagaRight">
                <div className="profilePageRightUp">
                    <GuiStats />
                </div>
                <div className="profilePageRightDown">
                    <NumberStatisticac />
                </div>

            </div>
        </div>
    )
}

export default Profile