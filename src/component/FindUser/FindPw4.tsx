import React, { useState } from 'react'
import "../../style/FindUserIdPw/FindPw4.scss";
import { useRecoilState, useRecoilValue } from 'recoil';
import { ShowChecktPw, ShowChecktPw1, isCorrectPwAtom, resEmailAtom } from '../../recoil/FindUserIdPw/FindUserIdPwAtom';
import show from "../../image/Mypage/show.png";
import showPwIcon from "../../image/Mypage/showIcon.png";
import check from "../../image/Mypage/Check.png";
import errorIcon from '../../image/SignUp/errorIcon.png';
import { useNavigate } from 'react-router-dom';
import { updatePwApi } from '../../apis/FindIdPw/FindPwApi';
const FindPw4 = () => {

    const [showPw, setShowPw] = useRecoilState<boolean>(ShowChecktPw);
    const [showPw1, setShowPw1] = useRecoilState<boolean>(ShowChecktPw1);
    const [isCorrectPw, setIsCorrectPw] = useState<boolean>(false);
    const [inputPw, setInputPw] = useState<string>("");
    const [inputPwCk, setInputPwCk] = useState<string>("");
    const [pwNull, setPwNull] = useState<boolean>(false);
    const [pwCheck, setPwCheck] = useState<boolean>(false);
    const [pwBase, setPwBase] = useState<boolean>(true);
    const findEmail = useRecoilValue(resEmailAtom);
    const passRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/

    const navigate = useNavigate();

    const changePw:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputPw(e.target.value);
    if(inputPwCk === e.target.value) {
        setPwCheck(false);
        if(passRegex.test(e.target.value)) {
                setPwCheck(false);
                setPwBase(false);
                setIsCorrectPw(true);
            }else{
                setPwBase(true);
                setIsCorrectPw(false);
            }
        }else{
            setPwNull(false);
            setIsCorrectPw(false);
            setPwCheck(true);
        }
    };

    const changePwCk:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputPwCk(e.target.value);
        if(inputPw === e.target.value) {
            setPwCheck(false);
            if(passRegex.test(e.target.value)) {
                    setPwCheck(false);
                    setPwBase(false);
                    setIsCorrectPw(true);
                }else{
                    setPwBase(true);
                    setIsCorrectPw(false);
                }
            }else{
                setPwNull(false);
                setIsCorrectPw(false);
                setPwCheck(true);
            }
        };

    const HandleShowPw = () => {
        setShowPw(!showPw);
    }

    const HandleShowPw1 = () => {
        setShowPw1(!showPw1);
    }

    const HandleSuccess = async () => {
        try {
            if(inputPw === "" || inputPwCk === ""){
                setPwNull(true);
                return;
            }
            if(isCorrectPw){
                //엑시오스 실행
                await updatePwApi(findEmail, inputPw);
                setPwNull(false);
                setPwBase(false);
                navigate("/login");          
            }else{
                setPwNull(false);
                setPwBase(true);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='FindPw4'>
            <div className='FindPw4Header'>
                <span>새로운 비밀번호 입력</span>
                <span>새로운 비밀번호를 입력해주세요.</span>
            </div>
            <div className='FindPw4InputGroup'>
                <span>비밀번호 {pwNull ? <span className='checkInput'>비밀번호를 입력해주세요.</span> : pwCheck ? <span className='checkInput'>비밀번호가 일치하지 않습니다.</span> : pwBase ? <span className='checkInput'>영문숫자 조합8자리 이상입니다.</span> : <span className='checkInpu checkPwMsg'>비밀번호가 일치합니다.</span>}</span>

                <div className="InputWithIcon">
                    <input type={showPw ? "text" : "password"} maxLength={10} value={inputPw} onChange={changePw} className='FindPw4Input' placeholder='비밀번호를 입력해주세요' />
                    {
                        showPw ? (
                            <div>
                                <img src={showPwIcon} alt='show' className='FindPw4Icon' onClick={HandleShowPw} />
                            </div>
                        ) : (
                            <div>
                                <img src={show} alt='show' className='FindPw4Icon' onClick={HandleShowPw} />
                            </div>
                        )
                    }
                </div>

                <div className="InputWithIcon">
                <span className='checkFindPwMsg'>비밀번호 확인</span>
                    {
                        isCorrectPw ? (
                            <img src={check} alt="check" className='FindPw4CheckIcon1 success' />
                        ) : <img src={errorIcon} alt="check" className='FindPw4CheckIcon1 success' />
                    }
                    {
                        showPw1 ? (
                            <div>
                                <img src={showPwIcon} alt='show' className='FindPw4Icon1' onClick={HandleShowPw1} />
                            </div>
                        ) : (
                            <div>
                                <img src={show} alt='show' className='FindPw4Icon1' onClick={HandleShowPw1} />
                            </div>
                        )
                    }
                    <input type={showPw1 ? "text" : "password"} maxLength={10} value={inputPwCk} onChange={changePwCk} className='FindPw4Input' placeholder='비밀번호를 다시 입력하세요.' />
                </div>
            </div>
            <div className='FindPw4Footer'>
                <button className='FindPw4Btn' onClick={HandleSuccess}>설정완료</button>
            </div>
        </div>
    )
}

export default FindPw4
