import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../helpers/axios";
import { CurrentGroup } from "./CurrentGroup";

export const InviteList = createContext();

export const InviteListProvider = ({ children }) => {
  const { currentGroup } = useContext(CurrentGroup);

  const [inviteList, setInviteList] = useState([]);

  const handleToggleSelect = (id) => {
    setInviteList((prev) =>
      prev.includes(id)
        ? prev.filter((memberId) => memberId !== id)
        : [...prev, id]
    );
    console.log(inviteList);
  };

  //////
  //Create Game + Send invites
  //////

  const sendInvites = async () => {
    try {
      const res = await makeRequest.post("/invites/send", {
        inviteList,
        groupId: currentGroup.id,
        type: 501,
      });

      console.log("GameId" + res.data);
      return res.data;
    } catch (error) {
      console.error("NAPAKA v sendInvites:", error);
      return null;
    }
  };

  return (
    <InviteList.Provider value={{ handleToggleSelect, sendInvites }}>
      {children}
    </InviteList.Provider>
  );
};
