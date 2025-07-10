import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./friendePage.scss"
import Friends from '../../components/friends/Friends'
import DownBar from '../../components/downBar/DownBar'


const FriendePage = () => {

  
  return (
    <div className="friendePage">
        <div className="friendeCompGP">
          <Friends/>
        </div>
        <div className="downBarCompGP">
            
        </div>
        
    </div>
  )
}

export default FriendePage