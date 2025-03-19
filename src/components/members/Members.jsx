import React from 'react'
import "./members.scss"
import Member from '../member/Member';


const Members = () => {

    const data = [
        { name: "flaming01", id: 1 },
        { name: "flamingo2", id: 2 },
        { name: "flaming3", id: 3 },
        { name: "flaming4", id: 4 },
        { name: "flaming01", id: 1 },
        { name: "flamingo2", id: 2 },
        { name: "flaming3", id: 3 },
        { name: "flaming4", id: 4 },
       
    ];

  return (
    <div className='cardMembers'>
        {data.map((member) => (
                <Member member={member} key={member.id} />
            ))}
            
    </div>
  )
}

export default Members