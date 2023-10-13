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
    return (
        <div className='reivew_premiumList_wrap' >
            {rList.map((item, idx) => (
              <div className='review_premium' key={idx}>
                <div>{item.goodseulName}</div>
                <div>{item.rcontent}</div>
              </div>
            ))}
        </div>
    );
}

export default ReviewPremiumList;
