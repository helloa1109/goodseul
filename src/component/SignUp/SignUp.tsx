import React from 'react'
import { signUpEmailInput, signUpNickNameInput, signUpPhoneNumberInput, signUpPwCkInput, signUpPwInput } from '../../recoil/SignUp/SignUpAtom';
import { useRecoilState } from 'recoil';
import { signUpApi } from '../../apis/SignUp/SignUpApi';
import { signUp } from '../../hooks/SignUp/SignUpTypes';
import { useNavigate } from 'react-router-dom';
import '../../style/SignUp/SignUp.scss';
import { Token } from '../../hooks/JWT/JWTType';

const SignUp:React.FC = () => {
    const navi = useNavigate();

    const [signUpEmail , setSignUpEmail] = useRecoilState(signUpEmailInput);
    const [signUpPw , setSignUpPw] = useRecoilState(signUpPwInput);
    const [signUpNickName, setSignNickName] = useRecoilState(signUpNickNameInput);
    const [signUpName, setSignName] = useRecoilState(signUpNickNameInput);
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
    const changeName:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignName(e.target.value);
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


    const naviLogin = () => {
        navi('/Login');
    }

  return (
    <div className='signUpBody'>
        <div className='singUpTxtBody'>
            <div className='signUpTxtMain'>
                구슬 ID 생성
            </div>
            <div className='signUpTxtSub'>
                *은 필수 입력 사항입니다.
            </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); signUpApi(SignUp)}}>
            <div className='signUpInputBody'>
                    <div className='signUpName signUpStyle01'>
                        <div className='signUpNameTxt signUpInputTxtStyle01'>*이름</div>
                        <div className='signUpNameInputBody signUpInputBodyStyle01'>
                            <input className='signUpNameInput signUpInputStyle01' type="text" placeholder='이름' value={signUpName} onChange={changeName}/>
                        </div>
                    </div>
                    <div className='signUpNickName signUpStyle01'>
                        <div className='signUpNickNameTxt signUpInputTxtStyle01'>*닉네임</div>
                        <div className='signUpNickNameInputBody signUpInputBodyStyle01'>
                            <input className='signUpNickNameInput signUpInputStyle01' type="text" placeholder='닉네임' value={signUpNickName} onChange={changeNickName}/>
                        </div>
                    </div>
                    <div className='signUpEmail'>
                        <div className='signUpEmailTxt signUpInputTxtStyle01'>*이메일</div>
                        <div className='signUpEmailStyle'>
                            <div className='signUpInputBodyStyle01'>
                                <input className='signUpInputStyle01' type="email" placeholder='ID로 사용될 이메일 입니다.' value={signUpEmail} onChange={changeSignUpEmail}/>
                            </div>
                            <button className='signUpEmailButton' type='button'>이메일 인증받기</button>
                        </div>
                        <div className='emailCertification'>
                            <span className='emailCertificationInputBody'>
                                <input className='emailCertificationNumberInput' type="number" placeholder='인증번호를 입력해주세요' value={signUpEmail} onChange={changeSignUpEmail}/>
                            </span>
                            <button className='emailCertificationButton' type='button'>확인</button>
                        </div>
                    </div>
                    <div className='signUpPw'>
                        <div className='signUpPwInputTxt signUpInputTxtStyle01'>*비밀번호</div>
                        <div className='signUpPwInputBodys'>
                            <div className='signUpPwInputBody'>
                                <input className='signUpPwInput signUpInputStyle01' type="password" placeholder='암호' value={signUpPw} onChange={changeSignUpPw}/>
                            </div>
                            <div className='signUpPwInputBody'>
                                <input className='signUpPwInput signUpInputStyle01' type="password" placeholder='암호 확인' value={signUpPwCk} onChange={changeSignUpPwCk} />
                            </div>
                        </div>
                    </div>
                    <div className='signUpPhoneNumber signUpStyle01'>
                        <div className='signUpPhoneNumberTxt signUpInputTxtStyle01'>*전화번호</div>
                        <div className='signUpPhoneNumberInputBody signUpInputBodyStyle01'>
                            <input className='signUpPhoneNumberInput signUpInputStyle01' type="number" placeholder='전화번호' value={signUpPhoneNumber} onChange={changeSignUpPhoneNumber}/>
                        </div>
                    </div>
                    <div className='signUpBirth signUpStyle01'>
                        <div className='signUpBirthTxt signUpInputTxtStyle01'>*생년월일</div>
                        <div className='signUpBirthInputBody signUpInputBodyStyle01'>
                            <input className='signUpInputStyle01 signUpInputStyle01' type="number" placeholder='Ex)19190101' value={signUpPhoneNumber} onChange={changeSignUpPhoneNumber}/>
                        </div>
                    </div>
                    <div className='signUpRegion signUpStyle01'>
                        <div className='signUpRegionTxt signUpInputTxtStyle01'>*지역</div>
                        <div className='signUpRegionInputBody signUpInputBodyStyle01'>
                            <input className='signUpRegionInput signUpInputStyle01' type="number" placeholder='Ex)19190101' value={signUpPhoneNumber} onChange={changeSignUpPhoneNumber}/>
                        </div>
                    </div>
                    <div className='signUpGoodseul'>
                        <div className='signUpGoodseulTxt'>
                            <div className='signUpGoodseulTxtMain'>혹시 <span className='signUpGoodseulMainPointTxt'>구슬</span>님 이십니까 ?</div>
                            <div className='signUpGoodseulTxtSub'>추가정보를 입력하여 구슬님 <span className='signUpGoodseulSubPointTxt'>인증</span>을 완료하세요.</div>
                        </div>
                    <div className='signUpGoodseulBody'>
                        <div className='signUpGoodseulNickName signUpStyle01'>
                            <div className='signUpGoodseulNickNameTxt signUpInputTxtStyle01'>*횔동명</div>
                            <div className='signUpGoodseulNickNameInputBody signUpInputBodyStyle01'>
                                <input className='signUpGoodseulNickNameInput signUpInputStyle01' type="text" placeholder='본인의 활동명을 작성해주세요.'/>
                            </div>
                        </div>
                        <div className='signUpSpecialty'>
                            <div className='signUpSpecialtyTxt signUpInputTxtStyle01'>특기</div>
                            <div className='signUpSpecialtyInputBody signUpInputBodyStyle01'>
                                <input className='signUpSpecialtyInput signUpInputStyle01' type="text" placeholder='자신이 잘하는 분야를 선택해주세요.'/>
                            <div className='signUpSpecialtySubInputBody'>
                                <input className='signUpSpecialtySubInput' type="text" placeholder='특기사항'/>
                                <span className='signUpDeleteOptionButton'>-</span>
                            </div>
                            </div>
                            <div className='signUpAddOptionButton'>+</div>
                        </div>
                        <div className='signCareer'>
                            <div className='signCareerTxtMain signUpInputTxtStyle01'>경력</div>
                            <div className='signCareerTxtSub'>자신의 경력을 작성하고 자료를 첨부해 주세요.<br/>
                            첨부된 자료는 검토 후 인증 구슬님 자료로 활용됩니다.</div>
                            <div className='signCareerInputBody'>
                                <div className='signCareerInput'>
                                    <input className='signCareerInputFileName' readOnly value='파일이름'/>
                                    <label className='signCareerInputFileLabel'>
                                        <span className='signCareerInputbutton'>첨부</span>
                                        <input className='signCareerInputFile' type="file"/>
                                    </label>
                                </div>
                                <div className='signCareerSubInputBody'>
                                    <div className='signCareerInput'>
                                        <input className='signCareerSubInputFileName' readOnly value='파일이름'/>
                                        <label className='signCareerSubInputFileLabel'>
                                            <span className='signCareerInputbutton'>첨부</span>
                                            <input className='signCareerSubInputFile' type="file"/>
                                        </label>
                                        <span className='signUpCareerDeleteOptionButton'>-</span>
                                    </div>
                                </div>
                            </div>
                            <div className='signUpAddOptionButton'>+</div>
                        </div>
                    </div>
                    </div>
                <button className='signUpSubmitButton' type='submit'>HAVE A ‘굿' DAY</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp
