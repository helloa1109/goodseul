import React, { useEffect, useState } from 'react';
import { ReviewCData } from '../../hooks/Review/Review';
import { reviewBList } from '../../apis/Review/ReviewBest'


function ReviewBestList() {
    const [rList, setRList] = useState<ReviewCData[]>([]);

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

      const limitedData = rList.slice(0, 2);
      const imgurl = 'http://dopeboyzclub.ddns.net:7733/images/';
    return (
        <div className='review_bestList_wrap'>
            {limitedData.map((item, idx) => (
              <div className='review_best' key={idx}> 
                <div className='review_besttop'>
                  <img className='review_bestpic' src={imgurl+`${item.goodseulProfile}`} alt="Profile"/>
                  <div className='review_bestlv'></div>
                </div>
                
                <div className='review_bestbot'>
                    <div>{item.rcontent}</div>
                    <div>{item.goodseulName}</div>
                    <div>{item.star}</div>
                    <button> 자세히 보기 </button>
                </div>      
              </div>
            ))}
        </div>
    );
}

export default ReviewBestList;
