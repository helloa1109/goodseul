import React from 'react';
import PlayAttendance from '../../component/plays/PlayAttendance';
import "../../style/play/attendance.scss"

const Attendance = () => {
    return (
        <div>
            {/* <h2>누적 출석일 : 0000일</h2> */}
            <PlayAttendance />
            <h2>카드를 선택하여 포인트를 획득하세요!</h2>
            <br />
            <h1>출석체크 주의사항</h1>
            <h2 className='c3'>
                애옹이가 울부짖습니다.<br />
                우워옹캬오오옹<br />
                클릭시 서버 보낼 내용 : 누른 카드 위치<br/>
                서버처리 : 미리 정의된 숫자목록에서 선정, 리턴<br/>
                클라처리 : 리턴되면 css 실행
            </h2>

        </div>
    );
};

export default Attendance;