import React from 'react'
import "../../style/Mypage/MypageMenu.scss";
import heart from "../../image/Mypage/heart.png";
import coupon from "../../image/Mypage/coupon.png";
import chat from "../../image/Mypage/chat.png";
import review from "../../image/Mypage/review.png";

const MypageMenu = () => {
  return (
    <div className='MypageMenu'>
      <div className='MypageMenuSelect'>
        <div className='MypageMenuSection'>
            <img src={heart} alt='heart' className='MypageMenuIcon'/>
            <span>찜 목록</span>
            <span>6</span>
        </div>
        <div className='MypageMenuSection'>
            <img src={coupon} alt='heart' className='MypageMenuIcon'/>
            <span>쿠폰함</span>
            <span>4</span>
        </div>
        <div className='MypageMenuSection'>
            <img src={chat} alt='heart' className='MypageMenuIcon'/>
            <span>채팅</span>
            <span>104</span>
        </div>
        <div className='MypageMenuSection'>
            <img src={review} alt='heart' className='MypageMenuIcon'/>
            <span>후기</span>
            <span>10</span>
        </div>
      </div>
    </div>
  )
}

export default MypageMenu
