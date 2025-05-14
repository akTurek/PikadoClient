import React from 'react'
import "./groupPage.scss"
import Members from '../../components/members/Members'
import DownBar from '../../components/downBar/DownBar'

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