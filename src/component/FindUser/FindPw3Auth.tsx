import React, { useRef, useEffect, useState } from 'react'
import "../../style/FindUserIdPw/FindPw3Auth.scss";
import { useRecoilState } from 'recoil';
import { isPathTrueAtom } from '../../recoil/FindUserIdPw/FindUserIdPwAtom';
import { useNavigate } from 'react-router-dom';

const FindPw3Auth = () => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(60); // 분 -> 초단위로 계산
    const [isPathTrue, setIstPathTrue] = useRecoilState<boolean>(isPathTrueAtom);

    const HandleCheckCode = () => {
        setIstPathTrue(false);
        navigate("/findpw4");
    }

    // Inputref 배열 초기화 시키기
    // <HTMLInputElement> 안쓰니깐 에러남 검색해보니까
    // 이걸 참조?해야된다고 합니다.
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    // 키 입력 처리
    // 입력란 내용이 있을 경우 -> 입력값 지움
    // 이전 input 으로 focus 잡히게 설정
    // inputRef 및 current가 null이 아닌 경우
    const handleInput = (index: number) => {
        const inputRef = inputRefs[index];
        if (inputRef && inputRef.current) {
            const inputValue = inputRef.current.value;
            console.log(inputValue);
            if (!/^[0-9]+$/.test(inputValue)) {
                // 입력이 숫자가 아닌 경우, 입력을 지움
                inputRef.current.value = '';
            }
        }

        if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        }
    };


    // 백스페이스 키 처리
    // event.key === 'backspace ' : 이벤트가 백스페이스 키 인지 확인함
    // event.preventDefault(); 기본 백스페이스 동작 취소 후 -> 다음 동작 수행 
    // 현재 입력란 값 없을경우 -> 이전 입력란으로 포커스
    // 백스페이스를 눌렀는데 값이 비어있지 않을경우 -> 현재 Input 입력값 지우기
    // 그 후 이전 input 으로 돌아감
    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        const inputRef = inputRefs[index];
        const lastInput = inputRefs[3].current!;
        if (event.key === 'Backspace' && event.currentTarget.value === '') {
            event.preventDefault();
            if (index > 0) {
                const prevInputRef = inputRefs[index - 1];
                if (prevInputRef.current) {
                    prevInputRef.current.value = '';
                    prevInputRef.current.focus();
                }
            } else {
                inputRefs[0].current?.focus();
            }
        } else if (event.key === 'Backspace' && event.currentTarget.value !== '') {
            if (index >= 0 && index <= 2) {
                event.currentTarget.value = '';
            }
        } else if (event.key === 'Backspace' && index === inputRefs.length - 1) {
            event.preventDefault();
            const prevInputRef = inputRefs[index - 1];
            if (prevInputRef.current) {
                prevInputRef.current.focus();
            }
        }
    };

    useEffect(() => {
        if (seconds > 0) {
            // 1씩 감소함
            const timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(timer);
        }

    }, [seconds]);

    // 코드 다시보내기 버튼
    const HandleReset = () => {

        // 타이머 0 일때 타이머 초기화
        // if (seconds === 0) {
        //     setSeconds(60);
        // }

        // 그냥 클릭 시 타이머 초기화
        setSeconds(60);
    }

    return (
        <div className='FindPw3Auth'>
            <div className='FindPw3Header'>
                <span>코드 입력</span>
                <span>인증 수단으로 전달받은 코드를 입력해주세요.</span>
            </div>
            <div className='FindPw3AuthInputGroup'>
                <input
                    type='text'
                    maxLength={1}
                    className='FindPw3AuthInput'
                    ref={inputRefs[0]}
                    onInput={() => handleInput(0)}
                    onKeyDown={(e) => handleKeyDown(0, e)}
                />
                <input
                    type='text'
                    maxLength={1}
                    className='FindPw3AuthInput'
                    ref={inputRefs[1]}
                    onInput={() => handleInput(1)}
                    onKeyDown={(e) => handleKeyDown(1, e)}
                />
                <input
                    type='text'
                    maxLength={1}
                    className='FindPw3AuthInput'
                    ref={inputRefs[2]}
                    onInput={() => handleInput(2)}
                    onKeyDown={(e) => handleKeyDown(2, e)}
                />
                <input
                    type='text'
                    maxLength={1}
                    className='FindPw3AuthInput'
                    ref={inputRefs[3]}
                    onInput={() => handleInput(3)}
                    onKeyDown={(e) => handleKeyDown(3, e)}
                />
            </div>
            <div className='FindPw3AuthFooter'>
                <span>유효시간  {`${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`}</span>
                <span onClick={HandleReset}>코드 다시 보내기</span>
                <button className='FindPw3AuthBtn' onClick={HandleCheckCode}>입력완료</button>
            </div>
        </div>
    )
}

export default FindPw3Auth
