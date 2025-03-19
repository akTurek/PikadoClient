import React from 'react';
import { createContext, useEffect, useState } from "react";
import { makeRequest } from '../helpers/axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {


    
  
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user")) || null
    );

  
    const logInFun = async (inputs) => {
       try {
        const userData = await makeRequest.post("/users/login",inputs,{ withCredentials: true});
        console.log("prejet user data "+userData.data)
        setCurrentUser(userData.data)
       } catch (error) {
        
       }


    };

    const logOut = (e) => {
        setCurrentUser(null);
    };
  
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(currentUser));
      console.log(currentUser)
    }, [currentUser]);
  
    return (
      <AuthContext.Provider value={{ currentUser, logInFun, logOut }}>
        {children}
      </AuthContext.Provider>
    );
};
