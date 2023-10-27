import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/Community/CommunityMenu.scss';

const CommunityMenu = () => {
  return (
    <div className='CommunityMenu'>

      <div className='CommunityFreeBoard'>
        <Link to="/CommunityList">
          <p>자유게시판</p>
        </Link>
      </div>

      <div className='CommunityClothes'>
        <Link to="/CommunityListFashion">
          <p>의상 & 소품</p>
        </Link>

      </div>

      <div className='CommunityFood'>
        <Link to="/CommunityListFood">
          <p>식품</p>
        </Link>

      </div>

      <div className='CommunityDancer'>
        <Link to="/CommunityListDance">
          <p>무용 & 악사</p>
        </Link>

      </div>

    </div>
  )
}

export default CommunityMenu
