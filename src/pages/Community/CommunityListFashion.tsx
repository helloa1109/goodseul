import React from 'react'
import '../../style/Community/CommunityList.scss';
import SearchBar from '../../component/SearchBar/SearchBar';
import CommunityBoardFashionTitle from '../../component/Community/CommunityBoardFashionTitle';
import { Link } from 'react-router-dom';

const CommunityListFashion = () => {
    return (
        <div className='CommunityListPage'>

            <div className='CommunityListIconFashion'>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                </svg>
            </div>

            <div className='CommunityListTitle'>
                <p>의상 & 소품</p>
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

                <CommunityBoardFashionTitle />

            </div>

            <div className='CommunityListPageBtn'>
                <span>페이지 1</span>
            </div>
        </div>
    )
}

export default CommunityListFashion
