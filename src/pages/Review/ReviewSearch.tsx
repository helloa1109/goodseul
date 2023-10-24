import React from 'react'
import SearchBar from '../../component/SearchBar/SearchBar'
import "../../style/review/reviewSearch.scss"
import { searchResultState } from '../../recoil/Review/ReviewAtom';
import { useRecoilValue } from 'recoil';


const ReviewSearch = () => {
  const searchResult = useRecoilValue(searchResultState);

  return (
    <div>
      <div className='rsSearch_wrap'>
        <SearchBar/>
      </div>
      <div className='rs_listwrap'>
        
          {
            searchResult.map((item,idx)=>(
              <div className='rs_box' key={idx}>
                <div className='rs_name'>{item.goodseulName}</div>
              </div>
            ))
          }
        </div>
    </div>
    
  )
}

export default ReviewSearch
