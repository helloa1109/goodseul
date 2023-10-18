import React,{useEffect} from 'react'
import "../../style/Mypage/MyPageReview.scss";
import { getMypageReviewList } from '../../apis/MyPage/MyPageReviewListApi';

const MyPageReviewList = () => {

    useEffect(()=>{
        getMypageReviewList();
    },[])

  return (
    <div className='MyPageReview'>
            <div className='MyPageReviewSectionBox'>

                <div className='MyPageReviewTopSection'>
                    <div className='MyPageReviewTopSectionOne'>
                        <div className='MyPageReviewInfo'>
                        </div>
                    </div>
                    <div className='MyPageReviewTopSectionTwo'>
                        <div className='MyPageReviewTopSectionTwoTop'>
                            경철 보살
                        </div>
                        <div className='MyPageReviewTopSectionTwoMid'>
                            저희 초롱이 49제관련 문의드립니다.
                        </div>
                        <div className='MyPageReviewTopSectionTwoBottom'>
                            별 별 별 별 별
                        </div>
                    </div>
                    <div className='MyPageReviewTopSectionThree'>
                        <div className='MyPageReviewTopSectionThreeTop'>
                            2023.10.16
                        </div>
                        <div className='MyPageReviewTopSectionThreeBottom'>
                            경기도 남양주시
                        </div>
                    </div>
                </div>
                <div className='MyPageReviewBottomSection'>
                    <div className='MyPageReviewBottomSectionTextBox'>
                        <div className='MyPageReviewBottomSectionText'>
                                야야
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default MyPageReviewList