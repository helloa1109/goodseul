import React from 'react'
import { useNavigate } from "react-router-dom";
import "../../style/Mypage/MypageMenu.scss";
import heart from "../../image/Mypage/heart.png";
import coupon from "../../image/Mypage/coupon.png";
import chat from "../../image/Mypage/chat.png";
import review from "../../image/Mypage/review.png";
import { userInfoAtom } from '../../recoil/Mypage/MyPageAtom';
import { myPage } from '../../hooks/MyPage/MyPageType';
import { useRecoilValue } from 'recoil';

const MypageMenu = () => {

  const userInfo = useRecoilValue<myPage>(userInfoAtom);

  const navigate = useNavigate();

  const HandleCoupon = () => {
    navigate("/MyPageCoupon");
  }

  const HandleChat = () => {
    navigate("/MyPageChat");
  }

  const HandleReview = () => {
    navigate("/MyPageReview");
  }

  return (
    <div className='MypageMenu'>
      <div className='MypageMenuSelect'>
        <div className='MypageMenuSection'>
            <img src={heart} alt='heart' className='MypageMenuIcon'/>
            <span>찜 목록</span>
            <span>{userInfo.favoriteCount}</span>
        </div>
        <div className='MypageMenuSection' onClick={HandleCoupon}>
            <img src={coupon} alt='heart' className='MypageMenuIcon'/>
            <span>쿠폰함</span>
            <span>{userInfo.couponCount}</span>
        </div>
        <div className='MypageMenuSection' onClick={HandleChat}>
            <img src={chat} alt='heart' className='MypageMenuIcon'/>
            <span>채팅</span>
            <span>{userInfo.chatRoomCount}</span>
        </div>
        <div className='MypageMenuSection' onClick={HandleReview}>
            <img src={review} alt='heart' className='MypageMenuIcon'/>
            <span>후기</span>
            <span>{userInfo.reviewCount}</span>
        </div>
      </div>
    </div>
  )
}

export default MypageMenu
