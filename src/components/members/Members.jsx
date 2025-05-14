import React, { useContext } from 'react'
import "./members.scss"
import Member from '../member/Member';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../helpers/axios';
import { AuthContext } from '../../context/AuthProvider';


const Members = () => {

  const {groupId} = useParams();
  const {currentUser}=useContext(AuthContext)

  const getMembers = async ()=>{
    try {
      const res = await makeRequest.get(`/members/getmembers/${groupId}`)
      console.log(res.data)
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  const {data : membersData, isLoading, isError} = useQuery({
    queryKey:['members', groupId],
    queryFn: () => getMembers(),
  })

  if (isLoading) return <div>Loading members...</div>;
  if (isError) return <div>Error loading members.</div>;

  const { members, owner } = membersData;

  const isOwner = owner == currentUser.id;
  
  return (
    <div className='cardMembers'>
        {members.map((member) => (
                <Member member={member} isOwner={isOwner} key={member.id} />
            ))}
                       
    </div>
  )
}

export default Members