import React, { useEffect, useRef, useState } from 'react';
import { RandomKorStr, RandomNumber, TimeDiff } from '../../apis/RandomUtils';
import { JWTDecoding } from '../../apis/JWT/JWTDecoding';
import { decodeToken } from '../../hooks/JWT/JWTType';
import { axiosPunch } from '../../apis/JWT/JWTConfig';

type csProps = {
    gameID?: number,
    rankingData: boolean | { nickname: string, rank: number, score: number, date: number }[],
    gameItem?:React.MutableRefObject<any|null>
}

const PlayRanking = ({ gameID, rankingData,gameItem }: csProps) => {
    const userNick = (JWTDecoding() as decodeToken).nickname;
    const [rankData, setRankData] = useState<{ nickname: string, rank: number, score: number, date: number }[]>();
    const serverUrl = "http://dopeboyzclub.ddns.net:7780";

    const classToggle = (e: HTMLDivElement) => {
        let tabs = document.querySelectorAll('.gameRankingTab');
        tabs.forEach(v => {
            v.classList.remove('selectedTab');
        });
        e.classList.add('selectedTab');
    }

    const getRankinglist = async (isWeekly: boolean = false) => {
        let data = await axiosPunch({
            method: 'get',
            url: `${serverUrl}/api/lv1/rank${isWeekly ? '/week' : ''}?gameIdx=${gameID}&orderBy=1`,
        })
            .then(r => {
                let a = (r.data as { nickname: string, rank: number, score: number, date: number }[]);
                if (a.length > 0)
                    setRankData(a);
                else
                    setRankData(undefined);
                return a.length > 0;
            })
            .catch(r => {
                console.error(r);
                return false;
            });
        // setRankData(data);
    }

    const handleWeeklyRanking = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        classToggle(e.currentTarget);
        getRankinglist(true);
        console.log('loadWeekly');
    }

    const handleTotalRanking = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        classToggle(e.currentTarget);
        getRankinglist();
        console.log('loadTotal');
    }

    const rankingRef = useRef<HTMLDivElement | null>(null);
    const handleClose = () => {
        let r = rankingRef.current as HTMLElement;
        r.style.transform = 'translate(120%,0px)';
        // r = document.getElementsByClassName('gameInformation')[0] as HTMLDivElement;
        r = gameItem?.current as HTMLElement;
        r.style.transform = 'translate(0%,0px)';
    }

    useEffect(() => {
        if (rankingData === true) {
            getRankinglist(true);
            // setRankData(rankingData as { nickname: string, rank: number, score: number, date: number }[]);
        }
    }, [rankingData]);




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
                        <th>기록</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rankData
                            ? rankData.map((v, i, data) => {
                                console.log(i, data.length - 1);
                                console.log(Number(v.nickname), userNick);
                                // console.log(i,i !== data.length - 1,Number(v.userIdx)!==userIdx);
                                if (i !== data.length - 1 || v.nickname !== userNick) {
                                    return (<tr>
                                        <td>{v.rank}</td>
                                        <td>{v.nickname}</td>
                                        <td>{v.score}</td>
                                        <td>{TimeDiff(v.date)}</td>
                                    </tr>);
                                } else {
                                    return null;
                                }
                            })
                            : <tr>
                                <td colSpan={4}>랭킹정보가 없습니다.</td>
                            </tr>
                    }
                </tbody>
                <tfoot>
                    <tr>
                        {
                            rankData && rankData.length > 1 && rankData.at(-1)?.nickname === userNick
                                ?
                                <>
                                    <td>{rankData.at(-1)?.rank}</td>
                                    <td>{rankData.at(-1)?.nickname}</td>
                                    <td>{rankData.at(-1)?.score}</td>
                                    <td>{TimeDiff(rankData.at(-1)?.date || 0)}</td>
                                </>
                                : <td colSpan={4}>내 랭킹이 없습니다.</td>
                        }
                        {/* <td>487,524</td>
                        <td>{RandomKorStr(2, 8)}</td>
                        <td>{RandomNumber(10, 1000000)}</td>
                        <td>{TimeDiff(new Date().getTime() - RandomNumber(0, 1000000))}</td> */}
                    </tr>
                </tfoot>

            </table>

        </div>
    );
};

export default PlayRanking;