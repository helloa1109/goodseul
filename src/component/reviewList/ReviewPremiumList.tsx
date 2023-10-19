import React, { useEffect, useState } from 'react';
import { ReviewCData } from '../../hooks/Review/Review';
import { reviewPList } from '../../apis/Review/ReviewPremium'

function ReviewPremiumList() {
    const [rList, setRList] = useState<ReviewCData[]>([]);

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

    return (
        <div className='review_premiumList_wrap' >
            {rList.map((item, idx) => (
              <div className='review_premium' key={idx}>
                <img className='review_prepic' alt='pre' src={imgurl+`${item.uprofile}`}/>
                <div className='review_precon'>{item.rsubject}</div>
                <div className='review_prename'>{item.unick}</div>
              </div>
            ))}
        </div>
    );
}

export default ReviewPremiumList;
