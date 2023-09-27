import React from 'react'
import "../../style/review/review.scss"
import SearchBar from '../../component/SearchBar/SearchBar'

const Review = () => {
  return (
    <div>
      <div className='review_sloganwrap'>
        <span className='review_slogan'>
          <span>굿</span>을 더 <span>슬</span>기롭게 하는 방법
        </span>
        <span className='review_text'>
          구슬 가족님들의<br/>
          생생한 후기를 전달합니다
        </span>
      </div>
      <div className='review_bestwrap'>
        <div className='review_besttxt'>
          베스트리뷰
        </div>
        <div className='review_best'>

        </div>
      </div>
      <div className='review_searchwrap'>
        <SearchBar/>
      </div>
      <div className='review_premiumwrap'>
        <div className='review_premium_txtwrap'>
          <div>프리미엄 리뷰</div>
          <div>모아보기</div>
        </div>
        <div className='review_premium'>

        </div>
      </div>
    </div>
  )
}

export default Review
