import React, { useContext } from 'react'
import "./members.scss"
import Member from '../member/Member';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../helpers/axios';
import { AuthContext } from '../../context/AuthProvider';
import { CurrentGroup } from '../../context/CurrentGroup';


const Members = () => {

  const {groupId} = useParams();
  const {currentUser}=useContext(AuthContext)
  const {currentGroup} = useContext(CurrentGroup)

  //////
  //Get list of group members
  //////
  const getMembers = async ()=>{
    try {
      const res = await makeRequest.get(`/members/getmembers/${groupId}`)
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  const {data , isLoading, isError} = useQuery({
    queryKey:['members', groupId],
    queryFn: () => getMembers(),
  })

  if (isLoading) return <div>Loading members...</div>;
  if (isError) return <div>Error loading members.</div>;


  return (
    <div className='cardMembers'>
        {data.map((member) => (
                <Member member={member} key={member.id} />
            ))}
                       
    </div>
  )
}

export default Members