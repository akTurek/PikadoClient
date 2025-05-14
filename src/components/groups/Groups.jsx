import React from 'react';
import "./groups.scss";
import Group from '../group/Group';
import { makeRequest } from '../../helpers/axios';
import { useQuery } from '@tanstack/react-query';

const Groups = () => {

    
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['myGroups'],
        queryFn: () => makeRequest.get('/group/mygroups').then(res => res.data),
      });

      if (isLoading) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error?.response?.data || error.message}</span>;        
      }
      
    return (
        <div className="groupsCard">
            {data.map((group) => (
                <Group group={group} key={group.id} />
            ))}
        </div>
    );
};

export default Groups;
