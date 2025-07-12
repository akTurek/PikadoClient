import React from "react";
import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../helpers/axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const logInFun = async (inputs) => {
    try {
      const userData = await makeRequest.post("/users/login", inputs);
      console.log("prejet user data " + userData.data);
      setCurrentUser(userData.data);
    } catch (error) {}
  };

  const logOut = async () => {
    try {
      await makeRequest.post("/users/logout");
      setCurrentUser(null);
      localStorage.removeItem("user");
    } catch (error) {}
  };

  const changePassword = async (newPassword) => {
    try {
      await makeRequest.put("/users/changepassword", newPassword);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    console.log(currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, logInFun, logOut, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};
