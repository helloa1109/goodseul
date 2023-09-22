import React from 'react'
import { useNavigate , useLocation} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {  HeaderMenuModalAtom } from "../../recoil/header/HeaderAtom";
import "../../style/header/SubHeader.scss";
import arrow from "../../image/header/control.png";

const SubHeader = () => {

    const [isOpen,setIsOpen] = useRecoilState(HeaderMenuModalAtom);

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
    }

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


