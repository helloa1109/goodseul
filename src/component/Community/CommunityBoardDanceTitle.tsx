import React, { useEffect } from 'react'
import '../../style/Community/CommunityBoardTitle.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CommunityTitleListState } from "../../recoil/Community/CommunityTitleRecoil";
import { getCommunityDanceTitleList } from "../../apis/Community/CommunityTitleApis";

const CommunityBoardDanceTitle = () => {

    const CommunityTitleListValue = useRecoilValue(CommunityTitleListState);
    const [CommunityTitleList, setCommunityTitleList] = useRecoilState(CommunityTitleListState);

    console.log("게시글 리스트 출력 확인", CommunityTitleListValue);

    useEffect(() => {
        const CommunityTitleData = async () => {
            try {
                const res = await getCommunityDanceTitleList();
                if (res) {
                    setCommunityTitleList(res.data);
                }

                console.log("게시판 리스트", res);
            } catch (error) {
                console.error("게시판 리스트 에러", error);
            };
        }; CommunityTitleData();
    },[])

    return (
        <div className='CommunityBoardTitlePage'>
            {CommunityTitleList.map((data, idx) => (
                <div className='BoardListCard' key={idx}>
                    <div className='CommunityBoardTitlePhoto'>
                    <img src={`http://dopeboyzclub.ddns.net:7733/userprofile/noImage.jpg`} alt={data.userProfile} />
                    </div>

                    <div className='CommunityBoardTitleName'>
                        <p>{data.boardDto.nickname}</p>
                    </div>

                    <div className='CommunityBoardTitleSub'>
                        <p>{data.boardDto.subject}</p>
                    </div>

                    <div className='CommunityBoardTitleTag'>
                        <span>{data.boardDto.tag}</span>
                    </div>

                    <div className='CommunityBoardTitleWriteDay'>
                        <p>{data.boardDto.writeDate}</p>
                    </div>

                    <div className='CommunityBoardTitleReply'>
                        <p>댓글 : 0</p>
                    </div>
                </div>

            ))}
        </div>

    )
}

export default CommunityBoardDanceTitle
