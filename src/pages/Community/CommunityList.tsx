import React from 'react'
import '../../style/Community/CommunityList.scss';
import SearchBar from '../../component/SearchBar/SearchBar';
import CommunityBoardTitle from '../../component/Community/CommunityBoardTitle';

const CommunityList = () => {
  return (
    <div className='CommunityListPage'>
      
      <div className='CommunityListIcon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
          <rect width="70" height="70" rx="15" fill="#D9D9D9" />
        </svg>
      </div>

      <div className='CommunityListTitle'>
        <p>자유게시판</p>
      </div>

      <div className='CommunityListSearchbar'>
        <SearchBar/>
      </div>

      <div className='CommunityListSummit'>
        <button>게시글 작성하기</button>
      </div>

      <div className='CommunityBoardList'>
        <ul>
          <li>
            <CommunityBoardTitle/>
          </li>
          
          <li>
            <CommunityBoardTitle/>
          </li>

          <li>
            <CommunityBoardTitle/>
          </li>

          <li>
            <CommunityBoardTitle/>
          </li>
        </ul>
      </div>

      <div className='CommunityListPageBtn'>
        <span>페이지 1</span>
      </div>
    </div>
  )
}

export default CommunityList
