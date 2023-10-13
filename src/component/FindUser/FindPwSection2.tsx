import React from 'react'
import "../../style/FindUserIdPw/FindPwSection2.scss";
import phone from "../../image/Mypage/phone.png";
import email from "../../image/Mypage/email.png";
import { useRecoilState } from 'recoil';
import { isFindIdAtom, isPathTrueAtom } from '../../recoil/FindUserIdPw/FindUserIdPwAtom';
import { useNavigate } from 'react-router-dom';
const FindPwSection2 = () => {

    const navigate = useNavigate();

    const [isPathTrue, setIstPathTrue] = useRecoilState<boolean>(isPathTrueAtom);
    const [isFindId, setIsFindId] = useRecoilState<boolean>(isFindIdAtom);

    const HandleAuth = () => {
        setIstPathTrue(false);
        navigate("/findpwauth");
    }

    const HandleFindId = () => {
        setIsFindId(true);
        navigate("/findidpw");
    }
    return (
        <div className='FindPwSection2'>
            <div className='FindPwSection2Header'>
                <span>비밀번호 찾기</span>
                <span>본인 인증을 진행할 방법을 선택하세요.</span>
            </div>
            <div className='FindPwSection2SelectGroup'>
                <div className='FindPwSection2Phone' onClick={HandleAuth}>
                    <div className='FindPwSection2IconGroup'>
                        <img src={phone} alt='phone' className='FindPwSection2Icon' />
                    </div>
                    <span>전화번호 인증</span>
                </div>

                <div className='FindPwSection2Email' onClick={HandleAuth}>
                    <div className='FindPwSection2IconGroup'>
                        <img src={email} alt='phone' className='FindPwSection2Icon' />
                    </div>
                    <span>이메일 인증</span>
                </div>
            </div>
            <div className='FindPwSection2Footer'>
                <span onClick={HandleFindId}>아이디를 잊어버린 경우</span>
                <button className='FindpwSection2Btn' onClick={HandleAuth}>인증하기</button>
            </div>
        </div>
    )
}

export default FindPwSection2
