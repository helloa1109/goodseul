import React, { useRef } from 'react';
import { RandomKorStr, RandomNumber, TimeDiff } from '../../apis/RandomUtils';

type csProps = {
    gameID?: number,
}

const PlayRanking = ({ gameID }: csProps) => {
    const classToggle = (e: HTMLDivElement) => {

        let tabs = document.querySelectorAll('.gameRankingTab');
        tabs.forEach(v => {
            v.classList.remove('selectedTab');
        });

        e.classList.add('selectedTab');
    }

    const handleWeeklyRanking = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        classToggle(e.currentTarget);
        console.log('loadWeekly');
    }

    const handleTotalRanking = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        classToggle(e.currentTarget);
        console.log('loadTotal');
    }

    const rankingRef = useRef<HTMLDivElement | null>(null);
    const handleClose = () => {
        let r = document.getElementsByClassName('gameRanking')[0] as HTMLDivElement;
        r.style.transform = 'translate(120%,0px)';
        r = document.getElementsByClassName('gameInformation')[0] as HTMLDivElement;
        r.style.transform = 'translate(0%,0px)';
    }

    

    return (
        <div className='gameRanking' ref={rankingRef}>
            <div className='gameRankingHeader'>
                <div onClick={handleWeeklyRanking} className='gameRankingTab selectedTab'>주간 랭킹</div>
                <div onClick={handleTotalRanking} className='gameRankingTab'>누적 랭킹</div>
                <div onClick={handleClose}>X</div>
            </div>

            <table className='gameRankingBody'>
                <thead>
                    <tr>
                        <th style={{ width: '0px' }}>#</th>
                        <th>닉네임</th>
                        <th>점수</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...Array(10)].map((v, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{RandomKorStr(2, 8)}</td>
                                <td>{RandomNumber(0, 1000000)}</td>
                                <td>{TimeDiff(new Date().getTime() - RandomNumber(0, 10000000000))}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>487,524</td>
                        <td>{RandomKorStr(2, 8)}</td>
                        <td>{RandomNumber(10, 1000000)}</td>
                        <td>{TimeDiff(new Date().getTime() - RandomNumber(0, 1000000))}</td>
                    </tr>
                </tfoot>

            </table>

        </div>
    );
};

export default PlayRanking;