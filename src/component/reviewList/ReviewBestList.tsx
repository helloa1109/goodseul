import React, { useEffect, useState } from 'react';
import { ReviewCData } from '../../hooks/Review/Review';
import { reviewBList } from '../../apis/Review/ReviewBest'
import ReviewModal from '../Review/ReviewModal';
import { useRecoilState } from 'recoil';
import { rIdxState } from '../../recoil/Review/ReviewAtom';


function ReviewBestList() {
    const [rList, setRList] = useState<ReviewCData[]>([]);
    const [rIdx, setRIdx] = useRecoilState(rIdxState);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await reviewBList();
            console.log(res.data);
    
            // 데이터가 유효한 경우에만 setRList 호출
            if (res.data) {
              setRList(res.data);
            } else {
              console.error("Data is undefined");
            }
          } catch (error) {
            console.error("Error", error);
          }
        };
    
        fetchData();
      }, []);

      const getUidx = (ridx:number) =>{
        setRIdx(ridx);
        console.log(ridx);
      }

      const limitedData = rList.slice(0, 2);
      const imgurl = 'http://dopeboyzclub.ddns.net:7733/userprofile/';
    return (
        <div className='review_bestList_wrap'>
            {limitedData.map((item, idx) => (
              <div className='review_best' key={idx} onClick={(e)=>{getUidx(item.ridx)}}> 
                <div className='review_besttop'>
                  <img 
                  className='review_bestpic' 
                  src={item.uprofile === 'NoImage'? `${imgurl}noImage.jpg` : `${imgurl}${item.uprofile}`} 
                  alt="Profile"
                  />
                  <div className='review_bestcolor'></div>
                </div>
                
                <div className='review_bestbot'>
                    <div className='review_subject review_vxsmalltxt'>"{item.rsubject}"</div>
                    <div className='review_GSname review_smalltxt review_mlightgray'>{item.goodseulName} 구슬님</div>
                    <div className='review_tags'>
                      <div className='review_vstartxt'>{item.skill}</div>
                    </div>
                    
                    <div className='review_goDetail'> 
                      <ReviewModal/> 
                    </div>
                    
                </div>      
              </div>
            ))}
        </div>
    );
}

export default ReviewBestList;
