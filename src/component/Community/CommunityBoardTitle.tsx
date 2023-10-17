import React from 'react'
import '../../style/Community/CommunityBoardTitle.scss';

const CommunityBoardTitle = () => {
    return (
        <div className='CommunityBoardTitlePage'>
            <div className='CommunityBoardTitlePhoto'>
                <span></span>
            </div>

            <div className='CommunityBoardTitleName'>
                <p>이상혁 페이커</p>
            </div>

            <div className='CommunityBoardTitleSub'>
                <p>천도제에 참여하실 현악기 하실분 구합니다.</p>
            </div>

            <div className='CommunityBoardTitleTag'>
                <span>구인</span>
            </div>

            <div className='CommunityBoardTitleWriteDay'>
                <p>6일전</p>
            </div>

            <div className='CommunityBoardTitleReply'>
                <p>댓글 : 0</p>
            </div>

        </div>

    )
}

export default CommunityBoardTitle
