import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./groupPage.scss"
import Members from '../../components/members/Members'
import DownBar from '../../components/downBar/DownBar'
import { CurrentGroup } from '../../context/CurrentGroup';

const GroupPage = () => {

  const [selectedMembers, setselectedMembers] = useState([])

    const handleToggleSelect = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((memberId) => memberId !== id) 
        : [...prev, id] 
    );
  };

  return (
    <div className="membersGP">
        <div className="membersCompGP">
        <Members handleSelect={handleToggleSelect}/>
        </div>
        <div className="downBarCompGP" selectedMembers={selectedMembers}>
            <DownBar/>
        </div>
        
    </div>
  )
}

export default GroupPage