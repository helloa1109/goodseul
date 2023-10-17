import React from 'react'
import '../../style/Community/Community.scss';
import CommunityEllipse from '../../component/Community/CommunityEllipse';
import CommunityMenu from '../../component/Community/CommunityMenu';

const Community = () => {
  return (
    <div className='CommunityPage'>

      <div className='CommunityPageTitle'>
        <p><span>구</span>인구직을 더 <span>슬</span>기롭게 하는 방법</p>
      </div>
      <div className='CommunityPageSubTitle'>
        <p>
          구슬가족님들과 <br/>
          <span>다양한 이야기</span>를 나눠보세요.
        </p>
      </div>
      
      <CommunityEllipse/>

      <div className='CommunityPageThirdTitle'>
        <p>카테고리를 선택하면 관련 주제가 표시됩니다.</p>
      </div>

      <CommunityMenu/>

    </div>
  )
}

export default Community
