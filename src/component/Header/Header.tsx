import React, { useEffect, useState } from 'react';
import "../../style/header/Header.scss";
import logo from "../../image/header/GoodSeul-Logo_.png";
import arrow from "../../image/header/control.png";
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeaderMenuModalAtom } from "../../recoil/header/HeaderAtom";
import { IsMainAtom, } from '../../recoil/header/HeaderAtom';
import { isFindIdAtom } from '../../recoil/FindUserIdPw/FindUserIdPwAtom';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(HeaderMenuModalAtom);
  const [isMain, setIsMain] = useRecoilState(IsMainAtom);
  const [isToggleChecked, setIsToggleChecked] = useState(false);
  const isFindId = useRecoilValue<boolean>(isFindIdAtom);

  const Location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    setIsModalOpen(false);
    navigate(-1);
  }

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
    setIsToggleChecked(!isToggleChecked);
  }


  let subHeaderTitle = "구슬";

  if (Location.pathname === "/login") {
    subHeaderTitle = "로그인";
  } else if (Location.pathname === "/signup") {
    subHeaderTitle = "회원가입";
  } else if (Location.pathname === "/Location") {
    subHeaderTitle = "위치기반";
  } else if (Location.pathname === "/Review") {
    subHeaderTitle = "후기";
  } else if (Location.pathname === "/Purpose") {
    subHeaderTitle = "목적별";
  } else if (Location.pathname === "/play") {
    subHeaderTitle = "플레이";
  } else if (Location.pathname === "/Request") {
    subHeaderTitle = "견적요청";
  } else if (Location.pathname === "/OnAir") {
    subHeaderTitle = "실시간 상담";
  } else if (Location.pathname === "/GuseulDetail") {
    subHeaderTitle = "상세보기";

  } else if (Location.pathname === "/findidpw" && isFindId) {
    subHeaderTitle = "아이디찾기"
  } else if (Location.pathname === "/findidpw" && !isFindId) {
    subHeaderTitle = "비밀번호찾기"
  } else if (Location.pathname === "/findpwauth") {
    subHeaderTitle = "인증코드 입력";
  } else if (Location.pathname === "/findpw4") {
    subHeaderTitle = "새로운 비밀번호 입력";
  } else if (Location.pathname === "/findpw2") {
    subHeaderTitle = "비밀번호찾기 인증";
  } else if (Location.pathname === "/findidsuccess") {
    subHeaderTitle = "아이디찾기";
  } else if (Location.pathname === "/play/ball") {
    subHeaderTitle = "플레이볼랭킹";
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

  return (
    // isMain ? (
    <div className='headermain'>
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
      <HeaderMenu />

    </div>
  )
}

export default Header;
