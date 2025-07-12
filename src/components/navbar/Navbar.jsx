import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/LightDark'
import "./navbar.scss"
import { SiDart } from "react-icons/si";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlineGroupAdd } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";


const Navbar = () => {

  const { theme, changeTheme } = useContext(ThemeContext)

  const { logOut, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();


  const handleLogOut = async (e) => {
    await logOut();
    navigate("/login")
  }

  return (
    <div className="navbar">
      <div className="card">
        <div className="item" onClick={(e) => navigate("/")} >
          <SiDart className='icon' />
          <span>Home</span>
        </div>
        <div className="item" onClick={(e) => navigate("/friends")} >
          <HiMiniUserGroup className='icon' />
          <span>Friends</span>
        </div>
        <div className="item" onClick={(e) => navigate("/addfriend")}>
          <IoMdPersonAdd className='icon' />
          <span>Add Friends</span>
        </div>
        <div className="item" onClick={(e) => navigate("/findgroup")}>
          <FaPeopleGroup className='icon' />
          <span>Join Group</span>
        </div>
        <div className="item" onClick={(e) => navigate("/newgroup")}>
          <MdOutlineGroupAdd className='icon' />
          <span>Creat Group</span>
        </div>
      </div>
      <div className="card">
        <div className="item">
          {theme ? <FaRegMoon className='icon' onClick={changeTheme} /> : <FaRegSun className='icon' onClick={changeTheme} />}
        </div>

        <div className="item" onClick={(e) => navigate("/profile")}>
          <FaUserLarge className='icon' />
          <span>{currentUser?.username || "Guest"}</span>
        </div>
        <div className="item" onClick={handleLogOut}>
          <LuLogOut className='icon' />
          <span>Log out</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar