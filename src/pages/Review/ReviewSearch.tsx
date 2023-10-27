import React from 'react'
import SearchBar from '../../component/SearchBar/SearchBar'
import "../../style/review/reviewSearch.scss"
import ReviewSearchList from '../../component/reviewList/ReviewSearchList'



const ReviewSearch = () => {
  

  return (
    <div>
      <div className='rsSearch_wrap'>
        <SearchBar/>
        <div className='rs_txt review_vsmallheavytxt'> 검색결과 </div>
      </div>
      <ReviewSearchList/>
    </div>
    
  )
}

export default ReviewSearch
