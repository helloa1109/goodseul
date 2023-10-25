import React from 'react'
import { useNavigate } from "react-router-dom";
import "../../style/MyPage/MypageMenu2.scss";
import pay from "../../image/MyPage/paypng.png";
import offer from "../../image/MyPage/offer.png";
import chat from "../../image/MyPage/chat2.png";
import option from "../../image/MyPage/option.png";
import arrow from "../../image/MyPage/chevron-right.png";

const MypageMenu2 = () => {

    const navigate = useNavigate();

    const HandleRequest = () => {
        navigate("/MyPageRequest");
    }

    const HandleChangeInfo = () => {
        navigate("/MyPageChangeInfo");
    }
    
    return (
        <div className='MypageMenu2'>
            <div className='MypageMenuSection2'>
                <div className='MypageMenuList'>
                    <div className='MypageMenu2Icon'>
                        <img src={pay} alt='pay' className='MypageMenu2IconPng' />
                    </div>
                    <span>결제 내역</span>
                    <img src={arrow} alt='arrow' className='MypageMenu2ArrowIcon' />
                </div>
                <div className='MypageMenuList' onClick={HandleRequest}>
                    <div className='MypageMenu2Icon'>
                        <img src={offer} alt='pay' className='MypageMenu2IconPng' />
                    </div>
                    <span>견적 내역</span>
                    <img src={arrow} alt='arrow' className='MypageMenu2ArrowIcon' />
                </div>
                <div className='MypageMenuList'>
                    <div className='MypageMenu2Icon'>
                        <img src={chat} alt='pay' className='MypageMenu2IconPng' />
                    </div>
                    <span>관리자와 채팅</span>
                    <img src={arrow} alt='arrow' className='MypageMenu2ArrowIcon' />
                </div>
                <div className='MypageMenuList' onClick={HandleChangeInfo}>
                    <div className='MypageMenu2Icon'>
                        <img src={option} alt='pay' className='MypageMenu2IconPng' />
                    </div>
                    <span>개인정보수정</span>
                    <img src={arrow} alt='arrow' className='MypageMenu2ArrowIcon' />
                </div>
            </div>
        </div>
    )
}

export default MypageMenu2
