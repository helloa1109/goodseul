import React,{useEffect} from 'react'
import "../../style/MyPage/MyPageReview.scss";
import { getMypageReviewList } from '../../apis/MyPage/MyPageReviewListApi';
import { useRecoilState, useRecoilValue } from 'recoil';
import {MyPageReviewListState} from "../../recoil/MyPage/MyPageReviewListAtom";

const MyPageReviewList = () => {

    const MyReviewListValue = useRecoilValue(MyPageReviewListState);
    const [ReviewList,setReviewList] = useRecoilState(MyPageReviewListState);

    console.log("리뷰 value",MyReviewListValue);

    useEffect (()=>{
        const fetchData = async () => {
            try {
                const res = await getMypageReviewList();
                if(res){
                  setReviewList(res.data.reviews);
                } 

                console.log("콘솔로res",res);
              } catch (error){
                console.error("reviewonclic에러", error);
              };
        }; fetchData();
    },[setReviewList])



      
  return (
    <div className='MyPageReview'>
        {MyReviewListValue.map((reviewlist, idx)=> 

            <div key={idx} className='MyPageReviewSectionBox'>

                <div className='MyPageReviewTopSection'>
                    <div className='MyPageReviewTopSectionOne'>
                        <div className='MyPageReviewInfo'>
                             <img className='MyPageReviewProfile' src={`http://dopeboyzclub.ddns.net:7733/userprofile/${reviewlist.uprofile}`} alt='v' />
                        </div>
                    </div>
                    <div className='MyPageReviewTopSectionTwo'>
                        <div className='MyPageReviewTopSectionTwoTop'>
                            {reviewlist.goodseulName}
                        </div>
                        <div className='MyPageReviewTopSectionTwoMid'>
                            {reviewlist.rsubject}
                        </div>
                        <div className='MyPageReviewTopSectionTwoBottom'>
                            {reviewlist.likeCount}
                        </div>
                    </div>
                    <div className='MyPageReviewTopSectionThree'>
                        <div className='MyPageReviewTopSectionThreeTop'>
                        {reviewlist.rcreateDate.split('T')[0]}
                        </div>
                        <div className='MyPageReviewTopSectionThreeBottom'>
                            {reviewlist.rtype} / {reviewlist.skill}
                        </div>
                    </div>
                </div>
                <div className='MyPageReviewBottomSection'>
                    <div className='MyPageReviewBottomSectionTextBox'>
                        <div className='MyPageReviewBottomSectionText'>
                                {reviewlist.rcontent}
                        </div>
                    </div>
                </div>
            </div> 
            )}
               </div>
  );
};

export default MyPageReviewList
