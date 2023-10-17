import React, { useEffect, useState } from 'react';
import { axiosPunch } from '../../apis/JWT/JWTConfig';
import { JWTDecoding } from '../../apis/JWT/JWTDecoding';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../../recoil/JWT/JWTAtom';

const PlayAttendance = () => {
    const serverUrl = "http://dopeboyzclub.ddns.net:7780";
    const navi = useNavigate();
    const [points, setPoints] = useState<number[]>([]);
    const [alreadyAttendance, setAlreadyAttendance] = useState<boolean>(false);
    const isLogin = useRecoilValue(isLoginState);
    //실제로는 백엔드에서 처리함.
    //첫 출첵 또는 출첵판 리셋시 무작위 순서를 가진 배열을 DB에 저장.
    //이후 출첵호출시 pop시켜서 한개씩. 모두다 pop하여 0개가 되면 다음날 출첵페이지 접속시
    //출첵배열판 초기화.
    //출첵api 호출시 요청값 : x, 리턴값 : 얻은 포인트

    //init시 이미 뽑은 카드는 어떻게 배치 및 표기???
    ///api/lv1/attendance
    useEffect(() => {
        if(isLogin){
            initBoard();
        }else{
            alert("로그인 후 이용 가능합니다.");
        }
    }, []);

    const initBoard = async () => {
        let data: { pointData: string, attend: boolean } = await axiosPunch({
            method: 'get',
            url: `${serverUrl}/api/lv1/attendance`,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(r => r.data)
            .catch(r => {
                alert('출석정보를 불러오는데 실패하였습니다. 다시 시도해주세요.');
                console.error(r);
                // return 3;
            });
        if (data) {
            let ptsData = data.pointData.split(" ");
            // console.log(ptsData);
            // ptsData.pop();
            let toNum = ptsData.map(Number);
            // console.log(toNum);
            setPoints(toNum);
            setAlreadyAttendance(data.attend);
            // console.log();
        }
        // console.log(data);
    }

    const handleClick = async (e: any, idx: number) => {
        if (alreadyAttendance) return;

        const item = e.target as HTMLDivElement;
        if (item.classList.contains("eongflip") || item.classList.contains("opened")) return;

        let result: any = await tryAttendance(idx);

        // item.classList.
        if (result) {
            // console.log(result);
            item.classList.add("eongflip");
            item.innerText = result.toString();
            setAlreadyAttendance(true);
        }
        // const poppedValue = lst.pop();
        // if (poppedValue !== undefined) {
        //     item.classList.add("eongflip");
        //     item.innerText = poppedValue.toString();
        // }
        // if (item.parentElement) {
        //     // item.parentElement.style.pointerEvents = "none";
        // }
    };

    const tryAttendance = async (idx: number) => {

        let result: number = await axiosPunch({
            method: 'post',
            url: `${serverUrl}/api/lv1/attendance`,
            data: { position: idx },
            headers: { 'Content-Type': 'application/json' }
        })
            .then(r => {
                // console.log(r);
                return (r.data);
            })
            .catch(r => {
                alert('출석체크를 실패하였습니다. 잠시 후 다시 시도해주세요.');
                // console.error(r);
                // return -1;
            });
        return result;
    }

    return (
        <div className='cardarea b4'>
            {
                points.map((v, i) => (
                    <div key={i} className={`eong${points[i] !== 0 ? ' opened' : ''}`} onClick={(e) => { handleClick(e, i) }} >
                        {points[i] !== 0 ? points[i] : null}
                    </div>
                ))
            }
        </div>
    );
};

export default PlayAttendance;