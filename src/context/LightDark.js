import React from 'react';
import { createContext, useEffect, useState } from "react";
import { makeRequest } from '../helpers/axios';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {


    
  
    const [theme, setTheme] = useState(
      JSON.parse(localStorage.getItem("theme")) || false
    );

  
    const changeTheme = () => {
        setTheme(!theme);
      };
      
   
  
    useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
      console.log(theme)
    }, [theme]);
  
    return (
      <ThemeContext.Provider value={{ theme, changeTheme}}>
        {children}
      </ThemeContext.Provider>
    );
};
