import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import "../../style/Mypage/MypageMenu.scss";
import heart from "../../image/Mypage/heart.png";
import coupon from "../../image/Mypage/coupon.png";
import chat from "../../image/Mypage/chat.png";
import review from "../../image/Mypage/review.png";
import { useRecoilState } from 'recoil';
import { MyPageReviewListState } from '../../recoil/MyPage/MyPageReviewListAtom';
import { getMypageReviewList } from '../../apis/MyPage/MyPageReviewListApi';

const MypageMenu = () => {

  const navigate = useNavigate();

  const [ReviewList,setReviewList] = useRecoilState(MyPageReviewListState);

  const HandleCoupon = () => {
    navigate("/MyPageCoupon");
  }

  const HandleChat = () => {
    navigate("/MyPageChat");
  }

  useEffect(()=>{
    getMypageReviewList();
  });

  const HandleReviewOnclick = async () => {
    //api 호출하고
    // userecoilstate 선언 set으로 한번 담기 -> 
    try {
      const res = await getMypageReviewList();
      if(res){
        setReviewList(res.data.reviews);
      } 
      //setReviewList(res);
      navigate("/MyPageReview");

    } catch (error){
      console.error("reviewonclic에러", error);
    };
  }


  return (
    <div className='MypageMenu'>
      <div className='MypageMenuSelect'>
        <div className='MypageMenuSection'>
            <img src={heart} alt='heart' className='MypageMenuIcon'/>
            <span>찜 목록</span>
            <span>6</span>
        </div>
        <div className='MypageMenuSection' onClick={HandleCoupon}>
            <img src={coupon} alt='heart' className='MypageMenuIcon'/>
            <span>쿠폰함</span>
            <span>4</span>
        </div>
        <div className='MypageMenuSection' onClick={HandleChat}>
            <img src={chat} alt='heart' className='MypageMenuIcon'/>
            <span>채팅</span>
            <span>104</span>
        </div>
        <div className='MypageMenuSection' onClick={HandleReviewOnclick}>
            <img src={review} alt='heart' className='MypageMenuIcon'/>
            <span>후기</span>
            <span>10</span>
        </div>
      </div>
    </div>
  )
}

export default MypageMenu
