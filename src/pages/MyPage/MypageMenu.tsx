import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import "../../style/MyPage/MypageMenu.scss";
import heart from "../../image/MyPage/heart.png";
import coupon from "../../image/MyPage/coupon.png";
import chat from "../../image/MyPage/chat.png";
import review from "../../image/MyPage/review.png";
import { userInfoAtom } from '../../recoil/MyPage/MyPageAtom';
import { myPage } from '../../hooks/MyPage/MyPageType';
import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import { MyPageReviewListState } from '../../recoil/MyPage/MyPageReviewListAtom';
import { getMypageReviewList } from '../../apis/MyPage/MyPageReviewListApi';
import { MyPageCouponListState } from '../../recoil/MyPage/MyPageCouponListAtom';
import { getMypageCouponList } from '../../apis/MyPage/MyPageCouponListApi';
import { getMyPageFavoriteList } from '../../apis/MyPage/MyPageFavoriteListApi';
import { MyPageFavoriteListState } from '../../recoil/MyPage/MyPageFavoriteListAtom';


const MypageMenu = () => {

  const userInfo = useRecoilValue<myPage>(userInfoAtom);

  const navigate = useNavigate();

  const [ReviewList,setReviewList] = useRecoilState(MyPageReviewListState);
  const [CouponList,setCouponList] = useRecoilState(MyPageCouponListState);
  const [FavoriteList,setFavoriteList] = useRecoilState(MyPageFavoriteListState);

  const HandleFavoriteOnclick = async () => {
    try {
      const res= await getMyPageFavoriteList();
      if(res){
        setFavoriteList(res.data.favorites);
      }
      navigate("/MypageFavorite");
    } catch (error) {
      console.error("favorite 에러",error);
    }
    

  }
  const HandleCouponOnclick = async () => {
    try {
      const res = await getMypageCouponList();
      if(res){
        setCouponList(res.data.usercoupons);
      }
      navigate("/MyPageCoupon");
    } catch (error){
      console.error("couponlist 에러",error);
    }
  }

  const HandleChat = () => {
    navigate("/MyPageChat");
  }


  const HandleReviewOnclick = async () => {
    try {
      const res = await getMypageReviewList();
      if(res){
        setReviewList(res.data.reviews);
      } 
      navigate("/MyPageReview");
    } catch (error){
      console.error("reviewonclic에러", error);
    };
  }


  return (
    <div className='MypageMenu'>
      <div className='MypageMenuSelect'>
        <div className='MypageMenuSection'>
            <img src={heart} alt='heart' className='MypageMenuIcon' onClick={HandleFavoriteOnclick}/>
            <span>찜 목록</span>
            <span>{userInfo.favoriteCount}</span>
        </div>
        <div className='MypageMenuSection' onClick={HandleCouponOnclick}>
            <img src={coupon} alt='heart' className='MypageMenuIcon'/>
            <span>쿠폰함</span>
            <span>{userInfo.couponCount}</span>
        </div>
        <div className='MypageMenuSection' onClick={HandleChat}>
            <img src={chat} alt='heart' className='MypageMenuIcon'/>
            <span>채팅</span>
            <span>{userInfo.chatRoomCount}</span>
        </div>
        <div className='MypageMenuSection' onClick={HandleReviewOnclick}>
            <img src={review} alt='heart' className='MypageMenuIcon'/>
            <span>후기</span>
            <span>{userInfo.reviewCount}</span>
        </div>
      </div>
    </div>
  )
}

export default MypageMenu
