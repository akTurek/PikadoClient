import React, { useContext } from 'react'
import "./friends.scss"
import Friend from '../friend/Friend';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../helpers/axios';


const Friends = () => {


  //////
  //Get list of friends
  //////
  const getFriends = async () => {
    try {
      const res = await makeRequest.get("/friends/getallfriends")
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['friends'],
    queryFn: () => getFriends(),
  })

  if (isLoading) return <div>Loading Friends...</div>;
  if (isError) return <div>Error Loading Friends.</div>;


  return (
    <div className='cardFriend'>
      {data.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}

    </div>
  )
}

export default Friends