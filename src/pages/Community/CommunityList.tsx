import React from 'react'
import '../../style/Community/CommunityList.scss';
import SearchBar from '../../component/SearchBar/SearchBar';
import CommunityBoardTitle from '../../component/Community/CommunityBoardTitle';
import { Link } from 'react-router-dom';

const CommunityList = () => {
  return (
    <div className='CommunityListPage'>

      <div className='CommunityListIcon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
        </svg>
      </div>

      <div className='CommunityListTitle'>
        <p>자유게시판</p>
      </div>

      <div className='CommunityListSearchbar'>
        <SearchBar />
      </div>

      <div className='CommunityListSummit'>
        <Link to="/CommunityForm">
          <button>게시글 작성하기</button>
        </Link>
      </div>

      <div className='CommunityBoardList'>
            <CommunityBoardTitle />
      </div>

      <div className='CommunityListPageBtn'>
        <span></span>
      </div>
    </div>
  )
}

export default CommunityList
