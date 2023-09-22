import React from 'react'
import { useRecoilState } from 'recoil';
import { loginIdInput, loginPwInput } from '../../recoil/Login/LoginAtom';
import { handleLoginApi } from '../../apis/Login/LoginApi';
import { login } from '../../hooks/Login/LoginTypes';

const Login:React.FC = () => {
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
    

  return (
    <div>
        <div>
            <div>
                <input type="email" placeholder='이메일' value={loginId} onChange={onChangeLoginId} style={{width:'300px', height:'50px', fontSize:'30px'}}/>
            </div>
            <div>
                <input type="password" placeholder='비밀번호' value={loginPw} onChange={onChangeLoginPw} style={{width:'300px', height:'50px', fontSize:'30px'}}/>
            </div>
        </div>
        <div onClick={() => { handleLoginApi(IdPw) }}>
            로그인
        </div>
    </div>
  )
}

export default Login
