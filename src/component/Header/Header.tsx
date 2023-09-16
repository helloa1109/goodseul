import React from 'react'
import "../../style/header/Header.scss";
import logo from "../../image/header/applelogo.png";
import menu from "../../image/header/Frame 54.png";
import { useRecoilState } from 'recoil';
import {HeaderMenuModal} from "../../recoil/header/HeaderAtom";
import HeaderMenu from './HeaderMenu';


const Header = () => {

  const [HeaderMenuModalOpen, setHeaderMenuModal] = useRecoilState(HeaderMenuModal);

  const toggleMenu = () => {
    setHeaderMenuModal(!HeaderMenuModalOpen);
  }

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
      <div className='headerrightsection' onClick={toggleMenu}>
        <div className='headermenu'>
          <img src={menu} alt='menu' className='headermenuicon'/>
        </div>
      </div>
      {HeaderMenuModalOpen && <HeaderMenu/>}
    </div>
  )
}

export default Header

