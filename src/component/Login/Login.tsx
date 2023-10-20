import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { loginIdInput, loginPwInput } from '../../recoil/Login/LoginAtom';
import { isLoginState } from '../../recoil/JWT/JWTAtom';
import { LoginApi } from '../../apis/Login/LoginApi';
import { login } from '../../hooks/Login/LoginTypes';
import { useNavigate } from 'react-router-dom';
import { JWTHandleError } from '../../apis/JWT/JWTHandleError';
import kakaoLoginIcon from "../../image/Login/kakaoLoginIcon.png";
import googleLoginIcon from "../../image/Login/googleLoginIcon.png";
import naverLoginIcon from "../../image/Login/naverLoginIcon.png";
import '../../style/Login/Login.scss';

const Login:React.FC = () => {
    const navi = useNavigate();
    let serverUrl:string = "http://dopeboyzclub.ddns.net:7780";

    const [loginId , setLoginId] = useRecoilState(loginIdInput);
    const [loginPw , setLoginPw] = useRecoilState(loginPwInput);
    
    const onChangeLoginId:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginId(e.target.value);
    };

    const onChangeLoginPw:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginPw(e.target.value);
    };

    const IdPw:login = {
        "email":loginId, 
        "password":loginPw
    };

    const naviSignUp = () => {
        navi('/signUp');
    }
    
    const [LoginState ,setLoginState] = useRecoilState<boolean>(isLoginState);
    const [loginError , setLoginError] = useState<string|null>(null);

    const handleLogin = async () => {
        try {
            if(loginId !== "" && loginPw !== "") {
                await LoginApi(IdPw);
                // 이후 로그인 후의 처리를 할 수 있습니다.
                setLoginState(true);
                setLoginId("");
                setLoginPw("");
                navi("/"); 
            }else {
                setLoginError("아이디 또는 비밀번호를 입력해주세요.");
            }
        } catch (error) {
            // 에러 처리
            setLoginError(JWTHandleError(error));
            setLoginId("");
            setLoginPw("");
        }
    }; 
    const findIdPw = () =>{
        navi("/findidpw");
    }

  return (
    <div className='loginPage'>
        <div className='loginPageHeadMessege'>
            <div className='loginTxtMain'><span className='loginTxtMainPointTxt'>굿</span>을 더 <span className='loginTxtMainPointTxt'>슬</span>기롭게 하는 방법</div>
            <div className='loginTxtSub'><span className='loginTxtSubPointTxt'>구슬</span>에 로그인하세요</div>
        </div>
        <div className='loginIdPwInputBody'>
            <div className='IdInputBody'>
                <div className='IdInputTxt'>ID</div>
                <input className='IdInput' type="email" placeholder='이메일' value={loginId} onChange={onChangeLoginId}/>
            </div>
            <div className='PwInputBody'>
                <div className='PwInputTxt'>PASSWORD</div>
                <input className='PwInput' type="password" placeholder='비밀번호' value={loginPw} onChange={onChangeLoginPw}/>
            </div>
            {loginError && (
            <p className='loginErrorMessege'>{loginError}</p>
        )}
        </div>

        <div className='lgoinSubBody'>
            <span className='IdPwFind' onClick={findIdPw}>아이디/비밀번호 찾기</span>&nbsp;|&nbsp;
            <span className='signUpButton' onClick={naviSignUp}>회원가입</span>
        </div>
        <button className='loginButton' onClick={handleLogin}>
            로그인
        </button>
        
        <div className='socialLoginBody'>
            <div className='kakaoLogin'>
                <img className='socialLoginIcon' src={kakaoLoginIcon} alt="카카오 이미지 없음" />
            </div>
            <div className='googleLogin'>
                <img className='socialLoginIcon' src={googleLoginIcon}  alt="구글 이미지 없음" />
            </div>
            <div className='NaverLogin'>
                <img className='socialLoginIcon' src={naverLoginIcon}  alt="네이버 이미지 없음" />
            </div>
        </div>
    </div>
  )
}

export default Login
