import React, { useState } from 'react'
import "../../style/FindUserIdPw/FindUserIdPwForm.scss";
import kakaoLoginIcon from "../../image/Login/kakaoLoginIcon.png";
import googleLoginIcon from "../../image/Login/googleLoginIcon.png";
import naverLoginIcon from "../../image/Login/naverLoginIcon.png";
import { useRecoilState } from 'recoil';
import { isFindIdAtom, isPathTrueAtom, resEmailAtom, resIdAtom, resPwAtom } from '../../recoil/FindUserIdPw/FindUserIdPwAtom';
import { useNavigate } from 'react-router-dom';
import { findIdApi } from '../../apis/FindIdPw/FindIdApi';
import { findPwApi } from '../../apis/FindIdPw/FindPwApi';
const FindUserIdPwForm = () => {

    const navigate = useNavigate();
    const formData = new FormData();

    const [isFindId, setIsFindId] = useRecoilState<boolean>(isFindIdAtom);
    const [isPathTrue, setIstPathTrue] = useRecoilState<boolean>(isPathTrueAtom);
    const [findName, setFindName] = useState<string>("");
    const [findPhoneNumber, setFindPhoneNumber] = useState<string>("");
    const [findBirth , setFindBirth] = useState<string>("");
    const [findEmail, setFindEamil] = useRecoilState<string>(resEmailAtom);
    const [msgState, setMsgState] = useState<string>("");
    const [resId, setResId] = useRecoilState<string>(resIdAtom);
    const [resPw, setResPw ] = useRecoilState<string>(resPwAtom)

    const onChangeFindIdPwName:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFindName(e.target.value);
    };

    const onChangeFindIdPwPhoneNumber:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFindPhoneNumber(e.target.value);
    };

    const onChangeFindIdPwBirth:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFindBirth(e.target.value);
    };

    const onChangeFindIdPwEmail:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFindEamil(e.target.value);
    };


    const HadleFindUserInfo = () => {
        setFindName("");
        setFindPhoneNumber("");
        setFindBirth("");
        setMsgState("");
        if (isFindId) {
            setIsFindId(false);
        } else {
            setIsFindId(true);
        }
    }

    const HandleFindPw = async () => {
        setIstPathTrue(false);
        const inputs = document.getElementsByTagName('input');
        try {
            if(findName === ""){
                setMsgState("이름을 입력해주세요.");
                inputs[1].focus();
                return
            }else if(findEmail === "") {
                setMsgState("이메일을 입력해주세요.");
                inputs[2].focus();
                return
            }else if(findBirth === "") {
                setMsgState("생년웡일을 입력해주세요.");
                inputs[3].focus();
                return
            }
            const resPw = await findPwApi(findName, findEmail, findBirth);
            if(resPw === 204){
                setMsgState("가입한 아이디가 없습니다.");
                return;
            }
            setResPw(resPw);
            navigate("/findpw2");
        } catch (error:any) {
            if(error.response.status === 404){
                setMsgState("가입한 아이디가 없습니다.");
            }else{
                setMsgState("error : " + error.response.status);
            }
        }
    }

    const HandleFindSuccess = async () => {
        setIstPathTrue(false);
        const inputs = document.getElementsByTagName('input');
        try {
            if(findName === ""){
                setMsgState("이름을 입력해주세요.");
                inputs[1].focus();
                return
            }else if(findPhoneNumber === "") {
                setMsgState("전화번호를 입력해주세요.");
                inputs[2].focus();
                return
            }else if(findBirth === "") {
                setMsgState("생년웡일을 입력해주세요.");
                inputs[3].focus();
                return
            }
            const resId = await findIdApi(findBirth,findName,findPhoneNumber);
            if(resId === 204){
                setMsgState("가입한 아이디가 없습니다.");
                return;
            }
            setResId(resId);
            navigate("/findidsuccess");
        } catch (error:any) {
            if(error.response.status === 404){
                setMsgState("가입한 아이디가 없습니다.");
            }else{
                setMsgState("error : " + error.response.status);
            }
        }
    }

    return (

        <div className='FindUserIdPwForm'>
            <div className='FindUserIdPwWriteForm'>
                <div className='FindUserIdPwSection'>
                    <span>이름</span>
                    <input type='text' placeholder='가입시 기입한 이름을 입력하세요' onChange={onChangeFindIdPwName} value={findName} maxLength={4} className='FindUserIdPwInput'/>
                </div>

                <div className='FindUserIdPwSection'>
                    {isFindId ? <span>전화번호</span> : <span>이메일</span> }
                    {isFindId ? <input type='text' placeholder='가입시 기입한 전화번호를 입력하세요' onChange={onChangeFindIdPwPhoneNumber} value={findPhoneNumber} maxLength={11} className='FindUserIdPwInput' /> : 
                    <input type='text' placeholder='가입시 기입한 이메일을 입력하세요.' onChange={onChangeFindIdPwEmail} value={findEmail} className='FindUserIdPwInput' />}
                </div>

                <div className='FindUserIdPwSection'>
                    <span>생년월일</span>
                    <input type='text' placeholder='가입시 기입한 생년월일을 입력하세요' onChange={onChangeFindIdPwBirth} value={findBirth}  maxLength={8} className='FindUserIdPwInput' />
                </div>

                <div className='FindUserIdPwChangePage' onClick={HadleFindUserInfo}>
                    <span>
                        {isFindId ? "비밀번호만 잊어버린 경우" : "아이디만 잊어버린 경우"}
                    </span>
                </div>
                <span className='checkInput'>{msgState}</span>
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
