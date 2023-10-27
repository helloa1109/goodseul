import React, { useEffect, useState } from 'react'
import "../../style/review/review.scss"
import "../../style/global/global.scss"
import SearchBar from '../../component/SearchBar/SearchBar'
import ReviewBestList from '../../component/reviewList/ReviewBestList'
import ReviewPremiumList from '../../component/reviewList/ReviewPremiumList'




const Review = () => {
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
      <div className='review_besttxt'>
          <span className='review_vsamllheavytxt'><span className='review_burgundy'>베스트</span>리뷰</span>
          <div style={{marginLeft:'5px'}} className='review_lightgray review_vsmalltxt'> 많은 고객님들의 공감을 받은 후기들입니다. </div>
      </div>
              {
                ReviewBestList()
              }   
      <div className='review_premiumwrap'>
        <div className='review_premium_txtwrap'>
          <span className='review_vsamllheavytxt'><span className='review_burgundy'>프리미엄</span>리뷰</span>
              {
                ReviewPremiumList()
              }
        </div>
      </div>
      
    </div>
   
  )
}

export default Review
