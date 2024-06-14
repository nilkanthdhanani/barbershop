import React, { useState } from 'react';
import './header.scss';
import logo from '../../assets/images/png/logo.png';
import '../../styles/mixin/_mixin.scss';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='header'>
      <div className="container">
        <div className="header-div">
          <div className="header-div-logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header-div-ancer">
            <NavLink activeclassname='active' to={"/"}>Home</NavLink>
            <NavLink activeclassname='active' to={"/ourteam"}>Our Team</NavLink>
            <NavLink activeclassname='active' to={"/gallary"}>Gallary</NavLink>
            <NavLink activeclassname='active' to={"/contactus"}>Contact Us</NavLink>
          </div>
          <div className="header-div-menu">
            <HiMenuAlt1 className='header-div-menu-img' onClick={toggleSidebar} />
          </div>
        </div>
      </div>
      <div className={`sidebar-backdrop ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-div-logo">
          <Link to={"/"} onClick={toggleSidebar}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="sidebar-div-ancer">
          <AiOutlineClose className='sidebar-close' onClick={toggleSidebar} />
          <NavLink activeclassname='active' to={"/"} onClick={toggleSidebar}>Home</NavLink>
          <NavLink activeclassname='active' to={"/ourteam"} onClick={toggleSidebar}>Our Team</NavLink>
          <NavLink activeclassname='active' to={"/gallary"} onClick={toggleSidebar}>Gallary</NavLink>
          <NavLink activeclassname='active' to={"/contactus"} onClick={toggleSidebar}>Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
}
