import React from 'react'
import "../../style/FindUserIdPw/FindUserIdPwForm.scss";
import kakaoLoginIcon from "../../image/Login/kakaoLoginIcon.png";
import googleLoginIcon from "../../image/Login/googleLoginIcon.png";
import naverLoginIcon from "../../image/Login/naverLoginIcon.png";
import { useRecoilState } from 'recoil';
import { isFindIdAtom, isPathTrueAtom } from '../../recoil/FindUserIdPw/FindUserIdPwAtom';
import { useNavigate } from 'react-router-dom';
const FindUserIdPwForm = () => {

    const navigate = useNavigate();

    const [isFindId, setIsFindId] = useRecoilState<boolean>(isFindIdAtom);
    const [isPathTrue, setIstPathTrue] = useRecoilState<boolean>(isPathTrueAtom);
    

    const HadleFindUserInfo = () => {
        if (isFindId) {
            setIsFindId(false);
        } else {
            setIsFindId(true);
        }
    }

    const HandleFindPw =  () => {
        setIstPathTrue(false);
        navigate("/findpw2");
    }

    const HandleFindSuccess = () => {
        setIstPathTrue(false);
        navigate("/findidsuccess");
    }

    return (

        <div className='FindUserIdPwForm'>
            <div className='FindUserIdPwWriteForm'>
                <div className='FindUserIdPwSection'>
                    <span>이름</span>
                    <input type='text' placeholder='가입시 기입한 이름을 입력하세요' className='FindUserIdPwInput' />
                </div>

                <div className='FindUserIdPwSection'>
                    <span>전화번호</span>
                    <input type='text' placeholder='가입시 기입한 전화번호를 입력하세요' className='FindUserIdPwInput' />
                </div>

                <div className='FindUserIdPwSection'>
                    <span>생년월일</span>
                    <input type='text' placeholder='가입시 기입한 생년월일을 입력하세요' className='FindUserIdPwInput' />
                </div>

                <div className='FindUserIdPwChangePage' onClick={HadleFindUserInfo}>
                    <span>
                        {isFindId ? "비밀번호만 잊어버린 경우" : "아이디만 잊어버린 경우"}
                    </span>
                </div>

                <div className='FindUserIdPwSubmitBtn'>
                    {
                        isFindId ? (
                            <button className='FindUserIdBtn' onClick={HandleFindSuccess}>확인하기</button>
                        ) : <button className='FindUserPwBtn' onClick={HandleFindPw}>확인하기</button>
                    }
                </div>

                <div className='FindUserIdPwSocial'>
                    <div className='kakaoLogin'>
                        <img className='socialLoginIcon' src={kakaoLoginIcon} alt="카카오 이미지 없음" />
                    </div>
                    <div className='googleLogin'>
                        <img className='socialLoginIcon' src={googleLoginIcon} alt="구글 이미지 없음" />
                    </div>
                    <div className='NaverLogin'>
                        <img className='socialLoginIcon' src={naverLoginIcon} alt="네이버 이미지 없음" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FindUserIdPwForm
