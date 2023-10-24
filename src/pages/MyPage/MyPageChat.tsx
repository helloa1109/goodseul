import React, { useEffect } from 'react';
import "../../style/Mypage/MypageChat.scss";
import { useRecoilState, useRecoilValue } from 'recoil';
import { getChatRoomIdxAtom, getChatRoomListAtom, getRoomIdAtom, getUserNickAtom } from '../../recoil/Chat/ChatAtom';
import { getChatRoomList } from '../../apis/Chat/ChatApis';
import { JWTDecoding } from '../../apis/JWT/JWTDecoding';
import { decodeToken } from '../../hooks/JWT/JWTType';
import profile from "../../image/GuseulDetail/GuseulDetailImg01.jpg";
import { chatRoomList } from '../../hooks/Chat/ChatType';
import { useNavigate } from 'react-router-dom';

function MyPageChat() {
    
    const [chatRoom , setChatRoom] = useRecoilState(getChatRoomListAtom);
    const [otherIdx , setOtherIdx] = useRecoilState<chatRoomList[]>(getChatRoomIdxAtom);
    const RoomList = useRecoilValue(getChatRoomListAtom);
    const [getRoomId , setRoomId] = useRecoilState(getRoomIdAtom);
    const [UserNick, setUserNick] = useRecoilState(getUserNickAtom);
    const navigate = useNavigate();
    // 구슬 idx
    const OtherMemIdx = RoomList.map(item => item.userIdx);
    const OtherMemNick = RoomList.map(item => item.nickname);

    // 로그인 한 유저 idx
    const myIdx = (JWTDecoding() as decodeToken).idx;

    console.log("myIdx",myIdx);
    console.log("other" , otherIdx);
    console.log("otherIDx",OtherMemNick);


    const HandleChat = (clickedIndex:number) => {
        // 클릭한 인덱스 가져오는 코드
        const userIdx = OtherMemIdx[clickedIndex];
        const userNick = OtherMemNick[clickedIndex];
        let roomId;

        console.log("dd",userIdx);
        if(userIdx > myIdx){
            roomId = myIdx.toString() + "to" + userIdx.toString();
        }else{
            roomId = userIdx.toString() + "to" + myIdx.toString();
        }

        setRoomId(roomId);
        setUserNick(userNick);
        
        console.log(roomId);
        navigate(`/room/${roomId}`);
    }
    
    console.log(getRoomId);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await getChatRoomList();
                if (res && res.data) {
                    setChatRoom(res.data);
        
                }
            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();
    },[]);

    return (
        <div className='MypageChat'>
            {
                RoomList.map((item, idx) => (
                <div className='MypageChatList' key={idx} onClick={() => HandleChat(idx)}>
                    <div className='MypageUserImg'>
                        <img src={`http://dopeboyzclub.ddns.net:7733/userprofile/${item.userPhoto}`} alt='profile' className='MypageChatImg'/>
                    </div>
                    <div className='MypageChatUserInfo'>
                        <span className='MypageChatNick'>{item.nickname}</span>
                        <span className='MypageChatRecent'>
                            {item.lastChat}
                        </span>
                    </div>
                    
                </div>
                ))}
        </div>
    );
}

export default MyPageChat;