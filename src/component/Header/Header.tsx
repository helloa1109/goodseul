import React  from 'react'
import "../../style/header/Header.scss";
import logo from "../../image/header/applelogo.png";
import { useRecoilState } from 'recoil';
import { HeaderMenuModal } from "../../recoil/header/HeaderAtom";
import HeaderMenu from './HeaderMenu';


const Header = () => {

  const [HeaderMenuModalOpen, setHeaderMenuModal] = useRecoilState(HeaderMenuModal);
  
  const toggleMenu = () => {
    setHeaderMenuModal((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      isClosed: !prev.isClosed,
    }));
  }
  console.log("헤더메인",HeaderMenuModalOpen);


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
          <input id="toggle" type="checkbox" onClick={toggleMenu}/>
          <label className="hamburger"htmlFor="toggle">
            <div className="top"></div>
            <div className="middle"></div>
          </label>
        </div>
      </div>
      {HeaderMenuModalOpen.isOpen && <HeaderMenu />}
    </div>
  )
}

export default Header

