import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import RightBar from '../../components/rightBar/RightBar'
import { ThemeContext } from '../../context/LightDark'
import "./mainLayout.scss"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MainLayout = () => {

  const {theme} = useContext(ThemeContext)
  
  const queryClient = new QueryClient();

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