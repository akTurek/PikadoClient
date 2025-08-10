import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import RightBar from '../../components/rightBar/RightBar'
import { ThemeContext } from '../../context/LightDark'
import "./mainLayout.scss"
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CurrentGroup } from '../../context/CurrentGroup'
import { GameContext } from '../../context/GameContext'
import { InviteList } from '../../context/InviteList'

const MainLayout = () => {

  const location = useLocation();
  const { gameContext, setGameContext } = useContext(GameContext)

  const { leveGroupPage } = useContext(CurrentGroup)

  //const queryClient = new QueryClient();

  const { setInviteList } = useContext(InviteList)

  useEffect(() => {
    if (!location.pathname.startsWith("/group/")) {
      leveGroupPage();
    }

    setInviteList([])
    if (gameContext !== null) {
      setGameContext(null)
    }
  }, [location.pathname, gameContext]);

  return (
    //<QueryClientProvider client={queryClient}>
    <div  >
      <div className="main">
        <div className="topLM">
          <Navbar />
        </div>
        <div className="botomMl">
          <div className="outlet">
            <Outlet />
          </div>
          <div className="rbMl">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
    //</QueryClientProvider>
  )
}

export default MainLayout