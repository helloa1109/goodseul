import React from 'react'
import '../../style/Community/CommunityReply.scss';

const CommunityReply = () => {
    return (
        <div className='CommunityReplyPage'>

            <div className='CommunityReplyProfile'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#D9D9D9" />
                </svg>
                <p>이상혁 페이커</p>
            </div>

            <div className='CommunityReplyContents'>
                <p>
                    안녕하세요?<br /><br />
                    저는 한예종을 졸업하고, 현재 줄리어드 음대에서
                    종묘제례악을 공부하고 있는 대학원생입니다.<br /><br />
                    이번에 한국에 들어고게 되서 지원하고 싶습니다!<br />
                    채팅 확인 부탁드려요!
                </p>
            </div>
        </div>
    )
}

export default CommunityReply
