import React from 'react';
import { createContext, useEffect, useState } from "react";
import { makeRequest } from '../helpers/axios';
import { useNavigate } from 'react-router-dom';

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => { //hrani game id in ali je owner, kdo je na vrsti pa na backend v seshnu

    
    const [gameContext, setGameContext] = useState(
      JSON.parse(sessionStorage.getItem("group")) || null
    );

   
  
    useEffect(() => {
      sessionStorage.setItem("group", JSON.stringify(currentGroup));
      console.log(currentGroup)
    }, [currentGroup]);
  
    return (
      <CurrentGroup.Provider value={{ currentGroup, getGroupData, leveGroupPage }}>
        {children}
      </CurrentGroup.Provider>
    );
};
