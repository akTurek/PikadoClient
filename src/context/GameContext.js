import React from "react";
import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../helpers/axios";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  //hrani game id in ali je owner, kdo je na vrsti pa na backend v seshnu

  const [gameContext, setGameContext] = useState(
    JSON.parse(sessionStorage.getItem("game")) || null
  );

  useEffect(() => {
    sessionStorage.setItem("game", JSON.stringify(gameContext));
    console.log(gameContext);
  }, [gameContext]);

  const getGameData = async (inviteId) => {
    try {
      const res = await makeRequest.put(`/invites/acc/${inviteId}`);
      setGameContext(res.data);
      console.log("Game info:", JSON.stringify(res.data, null, 2));
    } catch (error) {}
  };

  return (
    <GameContext.Provider value={{ gameContext, getGameData, setGameContext }}>
      {children}
    </GameContext.Provider>
  );
};
