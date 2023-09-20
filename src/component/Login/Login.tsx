import React from 'react'
import { useRecoilState } from 'recoil';
import { loginIdInput, loginPwInput } from '../../recoil/Login/LoginAtom';
import { loginApi } from '../../apis/Login/LoginApi';


const Login:React.FC = () => {
    const [loginID , setLoginID] = useRecoilState(loginIdInput);
    const [loginPW , setLoginPW] = useRecoilState(loginPwInput);
    
    const changeLoginID:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginID(e.target.value);
    };

    const changeLoginPW:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginPW(e.target.value);
    };



  return (
    <div>
        <div>
            <div>
                <input type="email" placeholder='이메일' value={loginID} onChange={changeLoginID} style={{width:'300px', height:'50px', fontSize:'30px'}}/>
            </div>
            <div>
                <input type="password" placeholder='비밀번호' value={loginPW} onChange={changeLoginPW} style={{width:'300px', height:'50px', fontSize:'30px'}}/>
            </div>
        </div>
        <div onClick={() => {loginApi(loginID,loginPW)}}>
            로그인
        </div>
    </div>
  )
}

export default Login
