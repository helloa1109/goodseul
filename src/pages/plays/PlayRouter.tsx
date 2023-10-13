import React from 'react';
import { useParams } from 'react-router-dom';
import { Attendance, PlayBall, PlayShop } from './';
import PlayRun from '../../component/plays/PlayRun';





const PlayRouter = () => {
    const { pID } = useParams();
    const returnPage = (pID: string): React.JSX.Element => {
        switch (pID) {
            case "shop":
                return <PlayShop />;
            case "atd":
                return <Attendance />;
            case "ball":
                return <PlayBall />;
            case "run":
                return <PlayRun />;
            default:
                return <div>404 Not Found</div>;
        }
    }
    return <div className='divPlays'>{returnPage(pID ?? "")}</div>
};

export default PlayRouter;