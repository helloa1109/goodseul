import React from 'react'
import "../../style/Mypage/MypageMenu2.scss";
import pay from "../../image/Mypage/paypng.png";
import offer from "../../image/Mypage/offer.png";
import chat from "../../image/Mypage/chat2.png";
import option from "../../image/Mypage/option.png";
import arrow from "../../image/Mypage/chevron-right.png";

const MypageMenu2 = () => {
  return (
    <div className='MypageMenu2'>
      <div className='MypageMenuSection2'>
        <div className='MypageMenuList'>
            <div className='MypageMenu2Icon'>
                <img src={pay} alt='pay' className='MypageMenu2IconPng'/>
            </div>
            <span>결제 내역</span>
            <img src={arrow} alt='arrow' className='MypageMenu2ArrowIcon'/>
        </div>
        <div className='MypageMenuList'>
        <div className='MypageMenu2Icon'>
                <img src={offer} alt='pay' className='MypageMenu2IconPng'/>
            </div>
            <span>견적 내역</span>
            <img src={arrow} alt='arrow' className='MypageMenu2ArrowIcon'/>
        </div>
        <div className='MypageMenuList'>
        <div className='MypageMenu2Icon'>
                <img src={chat} alt='pay' className='MypageMenu2IconPng'/>
            </div>
            <span>관리자와 채팅</span>
            <img src={arrow} alt='arrow' className='MypageMenu2ArrowIcon'/>
        </div>
        <div className='MypageMenuList'>
        <div className='MypageMenu2Icon'>
                <img src={option} alt='pay' className='MypageMenu2IconPng'/>
            </div>
            <span>개인정보수정</span>
            <img src={arrow} alt='arrow' className='MypageMenu2ArrowIcon'/>
        </div>
      </div>
    </div>
  )
}

export default MypageMenu2
