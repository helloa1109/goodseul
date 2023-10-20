import React, { useState } from 'react'
import "../../style/FindUserIdPw/FindPwSection2.scss";
import phone from "../../image/Mypage/phone.png";
import email from "../../image/Mypage/email.png";
import { useRecoilState, useRecoilValue } from 'recoil';
import { isFindIdAtom, isPathTrueAtom, resNumberAtom, resPwAtom } from '../../recoil/FindUserIdPw/FindUserIdPwAtom';
import { useNavigate } from 'react-router-dom';
import { findPwPhoneCheckApi } from '../../apis/FindIdPw/FindPwApi';
const FindPwSection2 = () => {

    const navigate = useNavigate();
    const [isPathTrue, setIstPathTrue] = useRecoilState<boolean>(isPathTrueAtom);
    const [isFindId, setIsFindId] = useRecoilState<boolean>(isFindIdAtom);
    const [selectPhone, setSelectPhone] = useState<boolean>(true);
    const [selectEmail, setSelectEmail] = useState<boolean>(false);
    const [msgState, setMsgState] = useState<boolean>(false);
    const resPw = useRecoilValue<string>(resPwAtom);
    const [resNumber, setResNumber] = useRecoilState<string>(resNumberAtom);
    
    const selectPhoneCheck = () => {
        setSelectPhone(true);
        setSelectEmail(false);
    }

    const selectEmailCheck = () => {
        setSelectPhone(false);
        setSelectEmail(true);
    }

    const HandleAuth = async () => {
        setIstPathTrue(false);
        if(selectEmail){
            setMsgState(true);
            return;
        }
        setMsgState(false);
        console.log(resPw);
        try {
            setResNumber(await findPwPhoneCheckApi(resPw));
            navigate("/findpwauth");
        } catch (error) {
            console.log(error);
        }
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
                <div className={ selectPhone ? 'FindPwSection2Phone selectCheck' : 'FindPwSection2Phone'} onClick={selectPhoneCheck}>
                    <div className='FindPwSection2IconGroup'>
                        <img src={phone} alt='phone' className='FindPwSection2Icon' />
                    </div>
                    <span>전화번호 인증</span>
                </div>

                <div className={ selectEmail ? 'FindPwSection2Email selectCheck' : 'FindPwSection2Email'}onClick={selectEmailCheck}>
                    <div className='FindPwSection2IconGroup'>
                        <img src={email} alt='phone' className='FindPwSection2Icon' />
                    </div>
                    <span>이메일 인증</span>
                </div>
               {msgState &&  <span className='checkInput'>이메일 인증은 이용하실 수 없습니다.</span> }
            </div>
            <div className='FindPwSection2Footer'>
                <span onClick={HandleFindId}>아이디를 잊어버린 경우</span>
                <button className='FindpwSection2Btn' onClick={HandleAuth}>인증하기</button>
            </div>
        </div>
    )
}

export default FindPwSection2
