import React from 'react'
import '../../style/Community/CommunityMenu.scss';

const CommunityMenu = () => {
  return (
    <div className='CommunityMenu'>
      <div className='CommunityFreeBoard'>
        <p>자유게시판</p>
      </div>
      <div className='CommunityClothes'>
        <p>의상 & 소품</p>
      </div>
      <div className='CommunityFood'>
        <p>식품</p>
      </div>
      <div className='CommunityDancer'>
        <p>무용 & 악사</p>
      </div>
    </div>
  )
}

export default CommunityMenu
