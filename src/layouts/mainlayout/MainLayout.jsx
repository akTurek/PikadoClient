import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { ThemeContext } from '../../context/LightDark'
import "./mainLayout.scss"


const MainLayout = () => {

  const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`theme-${theme ? "dark" : "light"}`} >
      <div className="main">
        <div className="topLM">
          <Navbar/>
        </div>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout