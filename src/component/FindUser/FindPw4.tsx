import React from 'react'
import "../../style/FindUserIdPw/FindPw4.scss";
import { useRecoilState } from 'recoil';
import { ShowChecktPw, ShowChecktPw1, isCorrectPwAtom } from '../../recoil/FindUserIdPw/FindUserIdPwAtom';
import show from "../../image/Mypage/show.png";
import show1 from "../../image/Mypage/showpw.png";
import check from "../../image/Mypage/Check.png";
import { useNavigate } from 'react-router-dom';
const FindPw4 = () => {

    const [showPw, setShowPw] = useRecoilState<boolean>(ShowChecktPw);
    const [showPw1, setShowPw1] = useRecoilState<boolean>(ShowChecktPw1);
    const [isCorrectPw, setIsCorrectPw] = useRecoilState<boolean>(isCorrectPwAtom);
    const navigate = useNavigate();

    const HandleShowPw = () => {
        setShowPw(!showPw);
    }

    const HandleShowPw1 = () => {
        setShowPw1(!showPw1);
    }

    const HandleSuccess = () => {
        navigate("/login");
    }

    return (
        <div className='FindPw4'>
            <div className='FindPw4Header'>
                <span>새로운 비밀번호 입력</span>
                <span>새로운 비밀번호를 입력해주세요.</span>
            </div>
            <div className='FindPw4InputGroup'>
                <span>비밀번호</span>

                <div className="InputWithIcon">
                    <input type={showPw ? "text" : "password"} maxLength={8} className='FindPw4Input' placeholder='비밀번호를 입력해주세요' />
                    {
                        showPw ? (
                            <div>
                                <img src={show} alt='show' className='FindPw4Icon' onClick={HandleShowPw} />
                            </div>
                        ) : (
                            <div>
                                <img src={show1} alt='show' className='FindPw4Icon' onClick={HandleShowPw} />
                            </div>
                        )
                    }
                </div>

                <div className="InputWithIcon">
                    {
                        isCorrectPw ? (
                            <img src={check} alt="check" className='FindPw4CheckIcon1 success' />
                        ) : null
                    }
                    {
                        showPw1 ? (
                            <div>
                                <img src={show} alt='show' className='FindPw4Icon1' onClick={HandleShowPw1} />
                            </div>
                        ) : (
                            <div>
                                <img src={show1} alt='show' className='FindPw4Icon1' onClick={HandleShowPw1} />
                            </div>
                        )
                    }
                    <input type={showPw1 ? "text" : "password"} maxLength={8} className='FindPw4Input' placeholder='비밀번호를 다시 입력하세요.' />
                </div>
            </div>
            <div className='FindPw4Footer'>
                <button className='FindPw4Btn' onClick={HandleSuccess}>설정완료</button>
            </div>
        </div>
    )
}

export default FindPw4
