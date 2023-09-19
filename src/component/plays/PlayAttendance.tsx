import React from 'react';

const PlayAttendance = () => {
    const lst: number[] = [5, 5, 5, 5, 5, 10, 10, 15, 20, 25];
    //실제로는 백엔드에서 처리함.
    //첫 출첵 또는 출첵판 리셋시 무작위 순서를 가진 배열을 DB에 저장.
    //이후 출첵호출시 pop시켜서 한개씩. 모두다 pop하여 0개가 되면 다음날 출첵페이지 접속시
    //출첵배열판 초기화.
    //출첵api 호출시 요청값 : x, 리턴값 : 얻은 포인트

    //init시 이미 뽑은 카드는 어떻게 배치 및 표기???

    const handleClick = (e: any) => {
        const item = e.target as HTMLDivElement;
        if (item.classList.contains("eongflip")) return;

        const poppedValue = lst.pop();
        if (poppedValue !== undefined) {
            item.classList.add("eongflip");
            item.innerText = poppedValue.toString();
        }
        if (item.parentElement) {
            // item.parentElement.style.pointerEvents = "none";
        }
    };

    return (
        <div>
            {
                lst.map((v, i) => (
                    <div key={i} className='eong' onClick={handleClick} />
                ))
            }
        </div>
    );
};

export default PlayAttendance;