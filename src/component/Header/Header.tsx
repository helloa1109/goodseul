import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../../style/header/Header.scss";
import logo from "../../image/header/applelogo.png";
import { useRecoilState } from 'recoil';
import { HeaderMenuModalAtom } from "../../recoil/header/HeaderAtom";
import { IsMainAtom } from '../../recoil/header/HeaderAtom';
import HeaderMenu from './HeaderMenu';
import SubHeader from './SubHeader';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(HeaderMenuModalAtom);
  const [isMain, setIsMain] = useRecoilState(IsMainAtom);

  const locationHook = useLocation();
  
  // 특정 경로에서 상태 변경
  useEffect(() => {
    if (window.location.pathname === '/') {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
    
  }, [locationHook.pathname, setIsMain]); 

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    isMain ? (
      <div className='headermain'>
          <div className='headerleftsection'>
            <div className='headerlogopng'>
              <img src={logo} alt='logo' className='headerlogopng' />
            </div>
          </div>
          <div className='headerrightsection'>
            <div className='headermenu'>
              <input id="toggle" type="checkbox" onClick={toggleMenu} />
              <label className="hamburger" htmlFor="toggle">
                <div className="top"></div>
                <div className="middle"></div>
              </label>
            </div>
          </div>
          <div className='headerlogotext'>
              <div>구슬</div>
            </div>
          <HeaderMenu />
        </div>
    ) : (
      <SubHeader />
    )
  )
}

export default Header;
