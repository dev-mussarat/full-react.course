import React from 'react';
import "./Header.css";
import { MdOutlineDesktopMac } from "react-icons/md";
import { FaTabletAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { ImCross } from "react-icons/im";

function Header() {
  return (
    <div>
      <header className="mussarat-header">
        <div className="logo-section">
          <h1 className="logo-1">colorlib<span>.</span></h1>
          <span className="plus">+</span>
          <span className="text">IMAGINE</span>
        </div>

        <div className="icon-section">
          <MdOutlineDesktopMac />
         <FaTabletAlt />
         <FaMobileAlt />
         <IoCart />
         <ImCross />
          </div>
         
       
      </header>
    </div>
  );
}

export default Header;
