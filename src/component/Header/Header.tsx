import React, { useEffect, useState } from 'react';
import "../../style/header/Header.scss";

import {HeaderMenu,getUserNickAtom,IsMainAtom,
  useNavigate,useLocation,HeaderMenuModalAtom,useRecoilState,useRecoilValue,
  logo,arrow} from "./index";

import HeaderTitle from './HeaderTitle';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(HeaderMenuModalAtom);
  const [isMain, setIsMain] = useRecoilState(IsMainAtom);
  const [isToggleChecked, setIsToggleChecked] = useState(false);
  const UserNick = useRecoilValue(getUserNickAtom);

  const Location = useLocation();
  const navigate = useNavigate();

  const subHeaderTitle = HeaderTitle();

  const goBack = () => {
    setIsModalOpen(false);
    navigate(-1);
  }

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
    setIsToggleChecked(!isToggleChecked);
  }

  useEffect(() => {
    setIsToggleChecked(isModalOpen);
  }, [isModalOpen]);

  // 특정 경로에서 상태 변경
  useEffect(() => {
    if (Location.pathname === '/') {
      setIsMain(true);
      setIsModalOpen(false);
    } else {
      setIsMain(false);
      setIsModalOpen(false);
    }

  }, [Location.pathname, setIsMain, setIsModalOpen]);

  console.log("dd",isMain);

  return (
    // isMain ? (
    <div className={`headermain ${subHeaderTitle === `${UserNick}님 채팅방` ? "chatHeader" : ""}`}>
      <div>
        {
          isMain ? (
            <div className='headerleftsection'>
              <div className='headerlogopng'>
                <img src={logo} alt='logo' className='headerlogopng' />
              </div>
            </div>

          ) :
            <div className='headerleftsectionarrow'>
              <div className='headerlogopng' onClick={goBack}>
                <img src={arrow} alt='logo' className='headerlogopngarrow' />
              </div>
            </div>
        }
      </div>
      <div className='headerrightsection'>
        <div className='headermenu'>
          <input id="toggle" type="checkbox" checked={isToggleChecked} onClick={toggleMenu} readOnly />
          <label className="hamburger" htmlFor="toggle">
            <div className="top"></div>
            <div className="middle"></div>
          </label>
        </div>
      </div>
      {
        isMain ? (
          <div className='headerlogotext'>
            <div>구슬</div>
          </div>

        ) :
          <div className='headerlogotext'>
            <div>{subHeaderTitle}</div>
          </div>
      }
      <HeaderMenu/>
    </div>
  )
}

export default Header;
