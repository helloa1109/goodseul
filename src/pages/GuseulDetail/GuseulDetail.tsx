import React, { useEffect, useState } from 'react';
import "../../style/GuseulDetail/GuseulDetail.scss";
import GuseulBackImg from "../../image/GuseulDetail/GuseulDetailImg01.jpg";
import { RoomCreate, getChatHistory, getGoodSeulInfo } from '../../apis/Chat/ChatApis';
import { useNavigate } from 'react-router-dom';
import { RoomIdxAtom, getRoomIdAtom, getUserNickAtom, person1State, person2State } from '../../recoil/Chat/ChatAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { JWTDecoding } from '../../apis/JWT/JWTDecoding';
import { goodseulDto } from '../../hooks/Chat/ChatType';
import { decodeToken } from "../../hooks/JWT/JWTType";
import { GoodSeulIdxAtom } from '../../recoil/GoodSeul/GoodSeulAtom';
import { RecentlyViewedApi } from '../../apis/MyPage/myPage';
import { getGoodseulDetail } from '../../apis/GoodseulDetail/GoodseulDtailApis';
import { GoodseulDetailListState } from '../../recoil/GoodseulDetail/GoodseulDetailRecoil';

function GuseulDetail() {
  // GoodseulDetailListState의 값을 받아옴
  const GoodseulDetailValue = useRecoilValue(GoodseulDetailListState);
  // GoodseulDetailListState를 상태로 사용하고, 해당 상태를 업데이트할 수 있는 함수
  const [GoodseulDetailList, setGoodseulDetailList] = useRecoilState(GoodseulDetailListState);
  
  // 페이지가 로드될 때 실행되는 부분
  useEffect(() => {
    const data = async () => {
      try {
        // API 호출: pageGoodSeulIdx에 해당하는 구슬의 상세 정보를 가져옴
        const res = await getGoodseulDetail(pageGoodSeulIdx);
        if(res){
          // API로부터 받아온 데이터로 GoodseulDetailList 상태를 업데이트
          setGoodseulDetailList(res.data);
        }
      } catch (error) {
        console.error("구슬 상세정보 에러", error);
      }
    };
    // data 함수를 실행하여 데이터를 가져옴
    data();
  }, []);  // 빈 배열을 넘겨주면 컴포넌트가 처음 렌더링될 때만 실행

  // JWT 토큰을 디코딩하여 사용자의 고유 식별자를 가져옴
  console.log("idx tesrt=", (JWTDecoding() as decodeToken).idx);
  // sender의 상태와 상태를 업데이트하는 함수
  const [person1, setPerson1] = useRecoilState(person1State);
  // 구슬의 고유 식별자를 저장하는 상태
  const pageGoodSeulIdx = useRecoilValue(GoodSeulIdxAtom);
  // receiver의 상태와 상태를 업데이트하는 함수
  const [person2, setPerson2] = useRecoilState(person2State);
  // 구슬의 고유 식별자를 저장하는 상태와 해당 상태를 업데이트하는 함수
  const [goodSeulIdx, setGoodSeulIdx] = useState<goodseulDto[]>([]);
  // 채팅방의 고유 식별자를 저장하는 상태와 해당 상태를 업데이트하는 함수
  const [getRoomId, setRoomId] = useRecoilState(getRoomIdAtom);
  // 사용자의 닉네임을 저장하는 상태와 해당 상태를 업데이트하는 함수
  const [getUserNick, setUserNick] = useRecoilState(getUserNickAtom);
  // 페이지 이동을 담당하는 navigate 함수
  const navigate = useNavigate();
  // 방 생성 API의 응답을 저장하는 상태와 해당 상태를 업데이트하는 함수
  const [res, setRes] = useRecoilState<string>(RoomIdxAtom);

  // 채팅 버튼 클릭 시 실행되는 함수
  const handleChat = async () => {
    try {
      // API 호출: pageGoodSeulIdx에 해당하는 구슬의 정보를 가져옴
      const goodSeulResponse = await getGoodSeulInfo(pageGoodSeulIdx);

      if (goodSeulResponse) {
        // 구슬의 소유자의 고유 식별자를 가져옴
        const goodSeulIdx = goodSeulResponse.data.userDto.idx;
        // 구슬 소유자의 닉네임을 가져와 setUserNick으로 상태 업데이트
        setUserNick(goodSeulResponse.data.userDto.nickname);
        // 방 생성 API 호출: 구슬 소유자의 고유 식별자로 방을 생성
        const roomCreateResponse = await RoomCreate(goodSeulIdx);

        if (roomCreateResponse) {
          // 방 생성 응답 데이터에서 채팅 인원 정보를 추출하여 상태를 업데이트
          setRes(roomCreateResponse.data);
          const data = JSON.parse(roomCreateResponse.config.data);
          console.log(data);

          // person1, person2 상태를 업데이트하여 채팅 인원 정보를 저장
          setPerson1(data.person1);
          setPerson2(data.person2);

          // 방의 고유 식별자를 상태로 업데이트
          const roomId = roomCreateResponse.data;
          setRoomId(roomId);

          // 방의 채팅 기록을 가져와서 상태 업데이트
          getChatHistory(roomId);

          // 생성된 방의 페이지로 이동
          navigate(`/room/${roomId}`);
          console.log("handleChat in Detail RoomId", roomId);
        }
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  // 구슬 정보를 불러와서 최근 본 구슬 목록에 추가하는 부분
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출: pageGoodSeulIdx에 해당하는 구슬의 정보를 가져옴
        const res = await getGoodSeulInfo(pageGoodSeulIdx);
        if (res) {
          console.log("wtwt", res);
          const Name: string = res.data.goodseulDto.goodseulName;
          const image: string = res.data.userDto.userProfile;
          const idx: number = res.data.goodseulDto.idx;

          // 최근 본 구슬 목록에 추가하는 API 호출
          RecentlyViewedApi(idx, image, Name);
          return res;
        }
      } catch (error) {
        console.log(error);
      }
    }

    // fetchData 함수 실행: person1, person2 상태가 업데이트될 때마다 실행
    fetchData();
  }, [person1, person2]);

  // 콘솔에 구슬의 고유 식별자 출력
  console.log(goodSeulIdx);

  // 화면에 렌더링되는 부분
  return (
    <div className='GuseulDetailPage'>
      
      <img src={GuseulBackImg} alt='Guseul Back Image' className='GuseulDetailBackImage' />

      
      <div className='GuseulDetailPopUp'>
        
        <p className='GuseulName'>
          이상혁 구슬님
        </p>

        
        <div className='StarRank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15.5373L14.9865 19.1657C15.7771 19.7536 16.8514 18.963 16.5474 18.0306L14.6419 12.1724L19.5677 8.66562C20.3785 8.09805 19.9731 6.82101 18.9798 6.82101H12.9392L10.973 0.699331C10.6689 -0.23311 9.35135 -0.23311 9.04729 0.699331L7.06078 6.82101H1.02018C0.0269317 6.82101 -0.378478 8.09805 0.432341 8.66562L5.35806 12.1724L3.45264 18.0306C3.14858 18.963 4.22292 19.7333 5.01347 19.1657L10 15.5373Z" fill="#FFB800" />
          </svg>
          <p>
            6.8
          </p>
        </div>

        
        <div className='GuseulDetailTag'>
          <p className='GuseulDetailLocal'>
            경기도
          </p>
          <p className='GuseulDetailSkill'>
            성공기원
          </p>
          <p className='GuseulDetailState'>
            실시간
          </p>
        </div>

        
        <div className='GuseulDetailInfo'>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 22 15" fill="none">
            <path d="M7.5 9.375C4.99286 9.375 0 10.6286 0 13.125V15H15V13.125C15 10.6286 10.0071 9.375 7.5 9.375ZM2.50714 12.8571C3.40714 12.2357 5.58214 11.5179 7.5 11.5179C9.41786 11.5179 11.5929 12.2357 12.4929 12.8571H2.50714ZM7.5 7.5C9.56786 7.5 11.25 5.81786 11.25 3.75C11.25 1.68214 9.56786 0 7.5 0C5.43214 0 3.75 1.68214 3.75 3.75C3.75 5.81786 5.43214 7.5 7.5 7.5ZM7.5 2.14286C8.38929 2.14286 9.10714 2.86071 9.10714 3.75C9.10714 4.63929 8.38929 5.35714 7.5 5.35714C6.61071 5.35714 5.89286 4.63929 5.89286 3.75C5.89286 2.86071 6.61071 2.14286 7.5 2.14286ZM15.0429 9.43929C16.2857 10.3393 17.1429 11.5393 17.1429 13.125V15H21.4286V13.125C21.4286 10.9607 17.6786 9.72857 15.0429 9.43929ZM13.9286 7.5C15.9964 7.5 17.6786 5.81786 17.6786 3.75C17.6786 1.68214 15.9964 0 13.9286 0C13.35 0 12.8143 0.139286 12.3214 0.375C12.9964 1.32857 13.3929 2.49643 13.3929 3.75C13.3929 5.00357 12.9964 6.17143 12.3214 7.125C12.8143 7.36071 13.35 7.5 13.9286 7.5Z" fill="#F2F2F2" />
          </svg>1,990회</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 15 15" fill="none">
            <path d="M7.4925 0C3.3525 0 0 3.36 0 7.5C0 11.64 3.3525 15 7.4925 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.4925 0ZM7.5 13.5C4.185 13.5 1.5 10.815 1.5 7.5C1.5 4.185 4.185 1.5 7.5 1.5C10.815 1.5 13.5 4.185 13.5 7.5C13.5 10.815 10.815 13.5 7.5 13.5ZM7.335 3.75H7.29C6.99 3.75 6.75 3.99 6.75 4.29V7.83C6.75 8.0925 6.885 8.34 7.1175 8.475L10.23 10.3425C10.485 10.4925 10.815 10.4175 10.965 10.1625C11.1225 9.9075 11.04 9.57 10.7775 9.42L7.875 7.695V4.29C7.875 3.99 7.635 3.75 7.335 3.75Z" fill="#F2F2F2" />
          </svg>평균 5~10분</p>
          <p>₩5,000원 부터</p>
        </div>

        
        <div className='GuseulDetailAbility'>
          <h3>경기도 무형문화재</h3>
          <p>
            경기도 평택에서 태어나 지금까지 평택에 거주하고 있는<br />
            평택의 가장 대표적인 무당으로, 눈속임으로 상대를 속이는데<br />
            탁월한 재주가 있다.
          </p>
          <h4>
            "여러분들의 성공을 위해 최선을 다하겠습니다."
          </h4>
        </div>

        
        <div className='GuseulDetailBtn' onClick={handleChat}>
          상담신청
        </div>

        
        <div className='GuseulDetailLike'>
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
            <path d="M25.0244 1.40344C21.2843 -1.14658 16.666 0.0434272 14.1726 2.96178C11.6793 0.0434272 7.06089 -1.16075 3.32086 1.40344C1.33751 2.76345 0.0908367 5.05847 0.00583597 7.48099C-0.192499 12.9777 4.68088 17.3836 12.1184 24.1411L12.2601 24.2686C13.3368 25.2461 14.9943 25.2461 16.071 24.2545L16.2268 24.1128C23.6644 17.3694 28.5236 12.9635 28.3394 7.46682C28.2544 5.05847 27.0077 2.76345 25.0244 1.40344ZM14.3143 22.0303L14.1726 22.1719L14.031 22.0303C7.28756 15.9244 2.83919 11.8869 2.83919 7.79266C2.83919 4.9593 4.96421 2.83428 7.79757 2.83428C9.97925 2.83428 12.1043 4.2368 12.8551 6.17765H15.5043C16.241 4.2368 18.366 2.83428 20.5477 2.83428C23.381 2.83428 25.506 4.9593 25.506 7.79266C25.506 11.8869 21.0577 15.9244 14.3143 22.0303Z" fill="#F2F2F2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// GuseulDetail 컴포넌트를 내보냄
export default GuseulDetail;
