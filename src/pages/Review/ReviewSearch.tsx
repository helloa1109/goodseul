import React from 'react'
import SearchBar from '../../component/SearchBar/SearchBar'
import "../../style/review/reviewSearch.scss"
import { searchResultState } from '../../recoil/Review/ReviewAtom';
import { useRecoilValue } from 'recoil';


const ReviewSearch = () => {
  const searchResult = useRecoilValue(searchResultState);

  return (
    <div>
      <div className='RSSearch_wrap'>
        <SearchBar/>
      </div>
      <div className='RS_Listwrap'>
        <div className='RSList'>
          {
            searchResult.map((item,idx)=>(
              item.goodseulName
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ReviewSearch
