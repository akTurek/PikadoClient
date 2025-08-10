import React from "react";
import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../helpers/axios";
import { useNavigate } from "react-router-dom";

export const CurrentGroup = createContext();

export const CurrentGroupProvider = ({ children }) => {
  const [currentGroup, setCurrentGroup] = useState(
    JSON.parse(sessionStorage.getItem("group")) || null
  );

  const getGroupData = async (groupId) => {
    try {
      const groupData = await makeRequest.post(`/group/getdata/${groupId}`, {
        withCredentials: true,
      });
      console.log("prejet group data " + groupData.data[0]);
      setCurrentGroup(groupData.data);
    } catch (error) {}
  };

  const leveGroupPage = async () => {
    try {
      setCurrentGroup(null);
      sessionStorage.removeItem("group");
    } catch (error) {}
  };

  useEffect(() => {
    sessionStorage.setItem("group", JSON.stringify(currentGroup));
    console.log(currentGroup);
  }, [currentGroup]);

  return (
    <CurrentGroup.Provider
      value={{ currentGroup, getGroupData, leveGroupPage, setCurrentGroup }}
    >
      {children}
    </CurrentGroup.Provider>
  );
};
