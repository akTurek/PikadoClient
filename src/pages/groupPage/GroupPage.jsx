import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./groupPage.scss"
import Members from '../../components/members/Members'
import DownBar from '../../components/downBar/DownBar'
import { CurrentGroup } from '../../context/CurrentGroup';

const GroupPage = () => {



  return (
    <div className="membersGP">
        <div className="membersCompGP">
        <Members/>
        </div>
        <div className="downBarCompGP">
            <DownBar/>
        </div>
        
    </div>
  )
}

export default GroupPage