import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import RightBar from '../../components/rightBar/RightBar'
import { ThemeContext } from '../../context/LightDark'
import "./mainLayout.scss"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CurrentGroup } from '../../context/CurrentGroup'

const MainLayout = () => {

  const location = useLocation();

  const {leveGroupPage}= useContext(CurrentGroup)
  
  const queryClient = new QueryClient();

  useEffect(() => {
    if (!location.pathname.startsWith("/group/")) {
      leveGroupPage();
    }
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
    <div  >
      <div className="main">
        <div className="topLM">
          <Navbar/>
        </div>
        <div className="botomMl">
          <div className="outlet">
            <Outlet/>
          </div>
          <div className="rbMl">
            <RightBar/>
          </div>
        </div>
      </div>
    </div>
    </QueryClientProvider>
  )
}

export default MainLayout