import React from 'react'
import '../../style/Community/CommunityList.scss';
import SearchBar from '../../component/SearchBar/SearchBar';
import CommunityBoardFoodTitle from '../../component/Community/CommunityBoardFoodTitle';
import { Link } from 'react-router-dom';

const CommunityListFood = () => {
    return (
        <div className='CommunityListPage'>

            <div className='CommunityListIconFood'>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                </svg>
            </div>

            <div className='CommunityListTitle'>
                <p>식품게시판</p>
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

                <CommunityBoardFoodTitle />

            </div>

            <div className='CommunityListPageBtn'>
                <span>페이지 1</span>
            </div>
        </div>
    )
}

export default CommunityListFood
