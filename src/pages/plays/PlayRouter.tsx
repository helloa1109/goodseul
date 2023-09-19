import React from 'react';
import { useParams } from 'react-router-dom';
import Attendance from './Attendance';



const PlayRouter = () => {
    const {pID} = useParams();
    const returnPage = (pID:string):React.JSX.Element => {
        switch (pID) {
            case "atd":
                return <Attendance/>;
            default:
                return <div>404 Not Found</div>;
        }
    }
    return returnPage(pID??"");
};

export default PlayRouter;