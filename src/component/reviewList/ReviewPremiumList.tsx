import React, { useEffect, useState } from 'react';
import { ReviewCData } from '../../hooks/Review/Review';
import { reviewPList } from '../../apis/Review/ReviewPremium'
import { rIdxState } from '../../recoil/Review/ReviewAtom';
import { useRecoilState } from 'recoil';
import ReviewModal from '../Review/ReviewModal';

function ReviewPremiumList() {
    const [rList, setRList] = useState<ReviewCData[]>([]);
    const [rIdx, setRIdx] = useRecoilState(rIdxState);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await reviewPList();
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
      const imgurl = 'http://dopeboyzclub.ddns.net:7733/userprofile/';

      const getUidx = (ridx:number) =>{
        setRIdx(ridx);
        console.log(ridx);
      }

    return (
        <div className='review_premiumList_wrap' >
            {rList.map((item, idx) => (
              <div className='review_premium' key={idx} onClick={(e)=>{getUidx(item.ridx)}}>
                <img className='review_prepic' alt='pre' src={imgurl+`${item.uprofile}`}/>
                <div className='review_pretop'>
                  <div className='review_titlewrap'>
                    <div className='review_presubject review_vsmalltxt'>{item.rsubject}</div>
                    <div className='review_prename review_smalltxt'>{item.unick}</div>
                    <div className='review_chkpre'>
                      <span className='review_pretxt'>Premium</span>
                    </div>
                  </div>
                </div>
                <div className='review_prebot'>
                  <div className='review_markpush'>
                    <ReviewModal/>
                  </div>
                  <div className='review_mark review_stamp' 
                      style={{ 
                        border: item.star === 10 ? "2px solid #8C2323" : 
                      (item.star >= 7 && item.star < 10) ? "2px solid #2637BF" : 
                      "2px solid #2FC02C" }}>
                    <span style={{color: item.star === 10 ? "#8C2323" : 
                      (item.star >= 7 && item.star < 10) ? "#2637BF" : 
                      "#2FC02C"}}>
                    {
                      item.star === 10 ? "신통해요" : (item.star >= 7 && item.star < 10) ? "절묘해요" : "만족해요"
                    }
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
    );
}

export default ReviewPremiumList;
