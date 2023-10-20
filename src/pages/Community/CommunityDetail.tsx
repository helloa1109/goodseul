import React, { useState } from 'react';
import '../../style/Community/CommunityDetail.scss';
import CommunityReply from '../../component/Community/CommunityReply';

const CommunityDetail = () => {
    const [isReplyAreaVisible, setReplyAreaVisible] = useState(false);

    const toggleReplyArea = () => {
        setReplyAreaVisible(!isReplyAreaVisible);
    };

    return (
        <div className='CommunityDetailPage'>
            <div className='CommunityDetailProfile'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#D9D9D9" />
                </svg>
                <p>이상혁 페이커</p>
            </div>

            <div className='CommunityDetailTitle'>
                <p>천도제에 참여하실 현악기 담당자 구합니다.</p>
            </div>

            <div className='CommunityDetailContents'>
                <p>
                    안녕하세요. 저는 평택에서 활동중인 국가무형문화재
                    이상혁페이커라고 합니다.
                    이번에 지역행사에 초청되어 천도제를 진행하게 됐습니다.
                    저희 팀의 규모는 약 20명이며,
                    현재 현악기를 담당하는 악사분을 모집중에 있습니다.
                    자격 요건은 학사이상이며, 학사가 아니어도
                    경력이 5년이상 된다면 지원가능합니다.
                    자세한 사항은 채팅을 통해 이야기 나누었으면 합니다.
                    감사합니다!
                </p>

                <div className='CommunityDetailTag'>
                    <span>구인</span>
                </div>

                <span className='CommunityDetailWriteDay'>
                    게시일: 2023.09.12
                </span>

                <button className='CommunityDetailReplyBtn' onClick={toggleReplyArea}>답글</button>
                <br />
                <br />
                <hr />
            </div>

            {isReplyAreaVisible && (
                <div className='CommunityDetailReplyForm'>
                    <p className='CommunityDetailReplyTitle'>댓글 작성 하기</p>
                    <div className='CommunityDetailReplyArea'>
                        <textarea name='contentrs' cols={35} rows={8}>
                        </textarea>
                    </div>

                    <div className='CommunityDetailReplyAreaLabel'>
                        <div className='CommunityDetailReplyBtnLocation'>
                            <button>등록하기</button>
                            <button>취소</button>
                        </div>
                    </div>
                </div>
            )}

            <div className='CommunityDetailReplyList'>
            <p className='CommunityReplyComment'>댓글 :1</p>
                <CommunityReply/>
            </div>
        </div>
    );
}

export default CommunityDetail;
