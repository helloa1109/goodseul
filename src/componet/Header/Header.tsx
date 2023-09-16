import React from 'react'
import "./Header.scss";
import logo from "../../image/header/applelogo.png";
import menu from "../../image/header/Frame 54.png";

const Header = () => {
  return (
    <div className='headermain'>
      <div className='headerleftsection'>
        <div className='headerlogopng'>
          <img src={logo} alt='logo' className='headerlogopng' />
        </div>
        <div className='headerlogotext'>
          <div>GoodSeul</div>
        </div>
      </div>
      <div className='headerrightsection'>
        <div className='headermenu'>
          <img src={menu} alt='menu' className='headermenuicon'/>
        </div>
      </div>
    </div>
  )
}

export default Header
