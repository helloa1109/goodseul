import React from 'react';
import PlayAttendance from '../../component/plays/PlayAttendance';

const Attendance = () => {
    return (
        <div className='divPlays'>
            <h2>누적 출석일 : 0000일</h2>
            <PlayAttendance/>

        </div>
    );
};

export default Attendance;