import React from 'react'
import { signUpEmailInput, signUpNickNameInput, signUpPhoneNumberInput, signUpPwInput } from '../../recoil/SignUp/SignUpAtom';
import { useRecoilState } from 'recoil';
import { signUpApi } from '../../apis/SignUp/SignUpApi';

const SignUp:React.FC = () => {
    const [signUpEmail , setSignUpEmail] = useRecoilState(signUpEmailInput);
    const [signUpPw , setSignUpPw] = useRecoilState(signUpPwInput);
    const [signUpNickName, setSignNickName] = useRecoilState(signUpNickNameInput);
    const [signUpPhoneNumber, setSignUpPhoneNumber] = useRecoilState(signUpPhoneNumberInput);

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


  return (
    <div>
        <div>
            구슬 ID 새성
        </div>
        <div>
            하나의 구슬 ID로 구슬의 서비스를 이용할 수 있습니다.
        </div>
        <div>
            구슬 ID를 이미 가지고 계십니까? 
            <a href='./login'>
                로그인하기
            </a>
        </div>
        <div>
            *은 필수 입력 사항입니다.
        </div>
        <form onSubmit={() => {signUpApi(signUpEmail,signUpPw,signUpNickName,signUpPhoneNumber)}}>
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
                <div><input type="number" placeholder='Ex)20230904' /></div>
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
                    <div><input type="password" placeholder='암호 확인' /></div>
                </div>
                <div>
                    <div>*전화번호</div>
                    <div><input type="number" placeholder='전화번호' value={signUpPhoneNumber} onChange={changeSignUpPhoneNumber}/></div>
                </div>
            </div>
            <button>가입하기</button>

        </form>
        
    </div>
  )
}

export default SignUp
