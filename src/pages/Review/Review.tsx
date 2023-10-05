import React, { useEffect, useState } from 'react'
import "../../style/review/review.scss"
import "../../style/global/global.scss"
import SearchBar from '../../component/SearchBar/SearchBar'
import { reviewList } from '../../apis/Review/Review'
import { ReviewCData } from '../../hooks/Review/Review'


const Review = () => {
 
  const [rList, setRList] = useState<ReviewCData[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await reviewList();
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
    <div>
      <div className='review_sloganwrap'>
        <div className='review_slogan'>
          <span className='review_smalllighttxt'>
            <span className='review_bigtxt review_burgundy'>굿</span>을 더 <span className='review_bigtxt review_burgundy'>슬</span>기롭게 하는 방법
          </span>
        </div>
        <div className='review_txt'>
          <span className='review_vsmalltxt review_lightgray'>
            구슬 가족님들의<br/>
            <span>생생한 후기</span>를 전달합니다
          </span>
        </div>
      </div>
      <div className='review_searchwrap'>
        <SearchBar/>
      </div>
      <div className='review_bestwrap'>
        <div className='review_besttxt'>
          <span className='review_vsamllheavytxt'>베스트리뷰</span>
        </div>
        
        <div className='review_bestList_wrap'>
          
           <div className='review_best'>
            {rList.map((item, idx) => (
              <div key={idx}>
                {/* ReviewCData에서 적절한 필드를 사용하여 UI를 생성 */}
                <div>{item.goodseulName}</div>
                <div>{item.rcontent}</div>
                {/* 필요한 다른 필드 추가 */}
              </div>
            ))}
          </div>
          </div>
        </div>
      <div className='review_premiumwrap'>
        <div className='review_premium_txtwrap'>
          <span className='review_vsamllheavytxt'>프리미엄 리뷰</span>
          <div className='reivew_premiumList_wrap'>    
            <div className='review_premium'>     
            
            </div>    
          </div>
        </div>
      </div>
      
    </div>
   
  )
}

export default Review
