import React from 'react'
import { signUpEmailInput, signUpNickNameInput, signUpPhoneNumberInput, signUpPwCkInput, signUpPwInput } from '../../recoil/SignUp/SignUpAtom';
import { useRecoilState } from 'recoil';
import { signUpApi } from '../../apis/SignUp/SignUpApi';
import { signUp } from '../../hooks/SignUp/SignUpTypes';
import { useNavigate } from 'react-router-dom';
import { Token } from '../../hooks/JWT/JWTType';

const SignUp:React.FC = () => {
    const navi = useNavigate();

    const [signUpEmail , setSignUpEmail] = useRecoilState(signUpEmailInput);
    const [signUpPw , setSignUpPw] = useRecoilState(signUpPwInput);
    const [signUpNickName, setSignNickName] = useRecoilState(signUpNickNameInput);
    const [signUpPhoneNumber, setSignUpPhoneNumber] = useRecoilState(signUpPhoneNumberInput);
    const [signUpPwCk, setSignUpPwCk] = useRecoilState(signUpPwCkInput);

    const changeSignUpEmail:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignUpEmail(e.target.value);
    };
    const changeSignUpPw:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignUpPw(e.target.value);
    };
    const changeNickName:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignNickName(e.target.value);
    };
    const changeSignUpPhoneNumber:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignUpPhoneNumber(e.target.value);
    };
    const changeSignUpPwCk:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignUpPwCk(e.target.value);
    };
    const SignUp:signUp = { 
            "email":signUpEmail, 
            "password":signUpPw,
            "nickname":signUpNickName, 
            "phonenumber":signUpPhoneNumber 
        };

    const accessToken:Token = localStorage.getItem('accessToken');
    const refreshToken:Token = localStorage.getItem('refreshToken');

    const naviLogin = () => {
        navi('/Login');
    }

  return (
    <div>
        <div>accessToken ? : {accessToken}</div>
        <div>refreshToken ? : {refreshToken}</div>
        <div>
            구슬 ID 새성
        </div>
        <div>
            하나의 구슬 ID로 구슬의 서비스를 이용할 수 있습니다.
        </div>
        <div>
            구슬 ID를 이미 가지고 계십니까?
            {/*네비게이트로 변경하기 a태그 x*/}
            <div onClick={naviLogin}>
                로그인하기
            </div>
        </div>
        <div>
            *은 필수 입력 사항입니다.
        </div>
        <form onSubmit={(e) => { e.preventDefault(); signUpApi(SignUp)}}>
            <div>
                <div>*이름</div>
                <div>
                    <div>
                        <input type="text" placeholder='닉네임' value={signUpNickName} onChange={changeNickName}/>
                    </div>
                </div>
            </div>
            <div>
                <div>*지역</div>
                <div>
                    <div>
                        <option value={0}>서울</option>
                    </div>
                </div>
            </div>
            <div>
                <div>*생년월일</div>
                <div><input type="number" placeholder='Ex)20230904' value={""}/></div>
            </div>
            <br/>
            <div>
                <div>
                    <div>*이메일</div>
                    <div>*ID로 사용될 이메일입니다.</div>
                    <div><input type="email" placeholder='name@example.com' value={signUpEmail} onChange={changeSignUpEmail}/></div>
                    <div>이메일 인증받기</div>
                </div>
                <div>
                    <div>*비밀번호</div>
                    <div><input type="password" placeholder='암호' value={signUpPw} onChange={changeSignUpPw}/></div>
                    <div><input type="password" placeholder='암호 확인' value={signUpPwCk} onChange={changeSignUpPwCk} /></div>
                </div>
                <div>
                    <div>*전화번호</div>
                    <div><input type="number" placeholder='전화번호' value={signUpPhoneNumber} onChange={changeSignUpPhoneNumber}/></div>
                </div>
            </div>
            <button type='submit'>가입하기</button>

        </form>
        
    </div>
  )
}

export default SignUp
