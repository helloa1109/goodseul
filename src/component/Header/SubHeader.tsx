import React from 'react'
import { useNavigate , useLocation} from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {  HeaderMenuModalAtom } from "../../recoil/header/HeaderAtom";
import "../../style/header/SubHeader.scss";
import arrow from "../../image/header/control.png";
import Header from './Header';
import { isFindIdAtom } from '../../recoil/FindUserIdPw/FindUserIdPwAtom';

const SubHeader = () => {

    const [isOpen,setIsOpen] = useRecoilState(HeaderMenuModalAtom);
    const isFindId = useRecoilValue<boolean>(isFindIdAtom);

    const navigate = useNavigate(); 

    const Location = useLocation();

    const goBack = () => {
        setIsOpen(false);
        navigate(-1);
    }

    let subHeaderTitle = "구슬";
    if (Location.pathname === "/login") {
        subHeaderTitle = "로그인";
    } else if (Location.pathname === "/signup") {
        subHeaderTitle = "회원가입";
    } else if (Location.pathname === "/Location"){
        subHeaderTitle = "위치기반";
    } else if (Location.pathname === "/Review"){
        subHeaderTitle = "후기";
    } else if (Location.pathname === "/Purpose"){
        subHeaderTitle = "목적별";
    } else if (Location.pathname === "/play"){
        subHeaderTitle = "플레이";
    } else if (Location.pathname === "/Request"){
        subHeaderTitle = "견적요청";
    } else if (Location.pathname === "/OnAir"){
        subHeaderTitle = "실시간 상담";
    } else if (Location.pathname === "/GuseulDetail"){
        subHeaderTitle = "상세보기";
    } else if (Location.pathname === "/"){
        setIsOpen(false);
        <Header/>
    }else if (isFindId){
        subHeaderTitle = "아이디찾기"
    }else if (!isFindId){
        subHeaderTitle = "비밀번호찾기"
    }else if (Location.pathname === "/findpwauth"){
        subHeaderTitle = "인증코드 입력";
    }

    console.log(Location.pathname);

    return (
        <div className='SubHeaderMain'>
            <div className='SubHeaderLeftSection' onClick={goBack}>
                <img src={arrow} alt='arrow' className='SubHeaderArrowIcon'/>
            </div>
            <div className='SubHeaderMiddleSection'>
                <div className='SubHeaderText'>{subHeaderTitle}</div>
            </div>
        </div>
    )
}

export default SubHeader


