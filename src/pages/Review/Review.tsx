import React from 'react'
import "../../style/review/review.scss"
import "../../style/global/global.scss"
import SearchBar from '../../component/SearchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <div className='review_bestwrap'>
        <div className='review_besttxt'>
          <span className='review_vsamllheavytxt'>베스트리뷰</span>
        </div>
        <div className='review_bestList_wrap'>
          <div className='review_best'>

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
