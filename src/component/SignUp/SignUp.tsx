import React, { useEffect, useState } from 'react'
import { emailCertificationHidden, signUpGoodseulSpecialtyState, signUpGoodseulCareerState } from '../../recoil/SignUp/SignUpAtom';
import { useRecoilState } from 'recoil';
import { signUpApi, signUpGoodseulApi } from '../../apis/SignUp/SignUpApi';
import { signUp, signUpCheck, signUpGoodseul } from '../../hooks/SignUp/SignUpTypes';
import '../../style/SignUp/SignUp.scss';
import deleteOptionIcon from '../../image/SignUp/deleteOptionIcon.png';
import addOptionIcon from '../../image/SignUp/addOptionIcon.png';
import toggleIcon from '../../image/SignUp/toggleIcon.png';
import successIcon from '../../image/SignUp/successIcon.png';
import errorIcon from '../../image/SignUp/errorIcon.png';
import { signUpUserCheck } from '../../apis/SignUp/SignUpCheck';
import { EmailCertification, EmailDuplicateCheck } from '../../apis/SignUp/EmailCheck';
import hidePwIcon from "../../image/Mypage/show.png";
import showPwIcon from "../../image/Mypage/showIcon.png";
import { nickNameCheck } from '../../apis/SignUp/NickNameCheck';
import { phoneNumberCheck } from '../../apis/SignUp/PhoneNumberCheck';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navi = useNavigate(); 
    const [signUpName, setSignName] = useState<string>("");
    const [signUpNickName, setSignNickName] = useState<string>("");
    const [signUpNickNameCheck, setSignUpNickNameCheck] = useState<boolean>(false)
    const [signUpEmail , setSignUpEmail] = useState<string>("");
    const [emailCertificationHiddenState, setEmailCertificationHiddenState] = useRecoilState<boolean>(emailCertificationHidden);
    const [emailCertificationInput, setEmailCertificationInput] = useState<string>("");
    const [emailCertificationCheck, setEmailCertificationCheck] = useState<boolean>(false);
    const [emailCertificationNumber, setEmailCertificationNumber] = useState<string>("");
    const [emailCertificationLoding, setEmailCertificationLoding] = useState<boolean>(false);
    const [signUpPw , setSignUpPw] = useState<string>("");
    const [signUpPwCk, setSignUpPwCk] = useState<string>("");
    const [signUpPwShow, setSignUpPwShow] = useState<boolean>(false);
    const [signUpPwCkShow, setSignUpPwCkShow] = useState<boolean>(false);
    const [signUpPwCheckState, setSignUpPwCheckState] = useState<boolean>(false);
    const [signUpPhoneNumber, setSignUpPhoneNumber] = useState<string>("");
    const [signUpPhoneNumberCheck, setSignUpPhoneNumberCheck] = useState<boolean>(false);
    const [signUpBirth, setSignUpBirth] = useState<string>("");
    const [signUpRegion, setSignUpRegion] = useState<string>("");
    const [signUpGoodseul, setSignUpGoodseul] = useState<boolean>(false);
    const [goodseulNick, setGoodseulNick] = useState<string>("");
    const [signSpecialty, setSignSpecialty] = useState<string>("");
    const [signSpecialty01, setSignSpecialty01] = useState<string>("");
    const [signSpecialty02, setSignSpecialty02] = useState<string>("");
    const [signSpecialty03, setSignSpecialty03] = useState<string>("");
    const [signSpecialty04, setSignSpecialty04] = useState<string>("");
    const [signGoodseulSpecialty, setSignGoodseulSpecialty] = useRecoilState<number>(signUpGoodseulSpecialtyState);
    const [signGoodseulCareer, setSignGoodseulCareer] = useRecoilState<number>(signUpGoodseulCareerState);
    const [regionOption, setRegionOption] = useState<boolean>(false);
    const [specialtyOption, setSpecialtyOption] = useState<boolean>(false);
    const [specialtyOption01, setSpecialtyOption01] = useState<boolean>(false);
    const [specialtyOption02, setSpecialtyOption02] = useState<boolean>(false);
    const [specialtyOption03, setSpecialtyOption03] = useState<boolean>(false);
    const [specialtyOption04, setSpecialtyOption04] = useState<boolean>(false);
    const [mainFileValue, setMailFileValue] = useState(null);
    const [subFileValue01, setSubFileValue01] = useState(null);
    const [subFileValue02, setSubFileValue02] = useState(null);
    const [subFileValue03, setSubFileValue03] = useState(null);
    const [subFileValue04, setSubFileValue04] = useState(null);
    const [mainFileName, setMainFileName] = useState<string>("파일명");
    const [subFileName01, setSubFileName01] = useState<string>("파일명");
    const [subFileName02, setSubFileName02] = useState<string>("파일명");
    const [subFileName03, setSubFileName03] = useState<string>("파일명");
    const [subFileName04, setSubFileName04] = useState<string>("파일명");
    const [checkCase0, setCheckCase0] = useState<boolean>(false);
    const [checkCase1, setCheckCase1] = useState<boolean>(false);
    const [checkCase2, setCheckCase2] = useState<boolean>(false);
    const [checkCase3, setCheckCase3] = useState<boolean>(false);
    const [checkCase4, setCheckCase4] = useState<boolean>(false);
    const [checkCase5, setCheckCase5] = useState<boolean>(false);
    const [checkCase6, setCheckCase6] = useState<boolean>(false);
    const [checkCase7, setCheckCase7] = useState<boolean>(false);
    const [checkCase8, setCheckCase8] = useState<boolean>(false);
    const [checkCase9, setCheckCase9] = useState<boolean>(false);
    const [checkCase10, setCheckCase10] = useState<boolean>(false);
    const [checkCase11, setCheckCase11] = useState<boolean>(false);
    const [checkCase12, setCheckCase12] = useState<boolean>(false);
    const [checkCase13, setCheckCase13] = useState<boolean>(false);
    const [checkCase14, setCheckCase14] = useState<boolean>(false);
    const [checkCase15, setCheckCase15] = useState<boolean>(false);
    const [checkCase16, setCheckCase16] = useState<boolean>(false);
    const [checkCase17, setCheckCase17] = useState<boolean>(false);
    
    const skillArray = [signSpecialty, signSpecialty01, signSpecialty02, signSpecialty03, signSpecialty04];
    const filteredSkillArray = skillArray.filter(skill => skill !== "");
    const skills = filteredSkillArray.join(',');

    const fileValues = [mainFileValue, subFileValue01, subFileValue02, subFileValue03, subFileValue04];
    const filteredValues = fileValues.filter(value => value !== null);
    const careerFiles = filteredValues.join(",");
    const maxFileSize =  10 * 1024 * 1024;


    const changeSignUpEmail:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignUpEmail(e.target.value);
        setEmailCertificationCheck(false);
    };
    const changeSignUpPw:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignUpPw(e.target.value);
        if(e.target.value === signUpPwCk) {
            setSignUpPwCheckState(true);
            setCheckCase12(false);
        }else{
            setSignUpPwCheckState(false);
            setCheckCase12(true);   
        }
    };
    const changeSignUpPwCk:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignUpPwCk(e.target.value);
        if(signUpPw === e.target.value) {
            setSignUpPwCheckState(true);
            setCheckCase12(false);
        }else{
            setSignUpPwCheckState(false);
            setCheckCase12(true);
        }
    };
    const changeNickName:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignUpNickNameCheck(false);
        if(e.target.value.length > 10){
            setSignNickName("");
            return;
        }
        setSignNickName(e.target.value);
    };
    const changeName:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if(e.target.value.length > 4){
            setSignName("");
            return;
        }
        setSignName(e.target.value);
    };
    const changeSignUpPhoneNumber:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const currentValue:string = e.target.value;
        setSignUpPhoneNumberCheck(false);
        if(e.target.value.length > 11){
            setSignUpPhoneNumber("");
            return;
        }
        if(!isNaN(Number(currentValue))){
            setSignUpPhoneNumber(currentValue);
        }else{
            setSignUpPhoneNumber(signUpPhoneNumber);
        }
    };
    const chamgeSignUpEmailCertification:React.ChangeEventHandler<HTMLInputElement> = (e) => {
            const currentValue:string = e.target.value;
            if(!isNaN(Number(currentValue))){
                    setEmailCertificationInput(currentValue);
            }else{
                setEmailCertificationInput(emailCertificationInput);
            }
    };
    const changeSignUpBirth:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const currentValue:string = e.target.value;
        if(e.target.value.length > 8){
            setSignUpBirth("");
            return;
        }
        if(!isNaN(Number(currentValue))){
            setSignUpBirth(currentValue);
        }else{
            setSignUpBirth(signUpBirth);
        }
    };
    const changeSignUpRegion:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSignUpRegion(e.target.value);
    }

    const changeSignUpGoodseulNick:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if(e.target.value.length > 8){
            setGoodseulNick("");
            return;
        }
        setGoodseulNick(e.target.value);
    }

    const SignUp:signUp = {
            "name":signUpName,
            "nickname":signUpNickName,
            "email":signUpEmail,
            "password":signUpPw,
            "phoneNumber":signUpPhoneNumber,
            "birth":signUpBirth,
            "location":signUpRegion
        };

    const SignUpGoodseul:signUpGoodseul = {
        "goodseulDto": {
          "career": careerFiles,
          "goodseulName": goodseulNick,
          "skill": skills
        },
        "userDto": SignUp
    };

    const SignUpCheck:signUpCheck = {
            "name":signUpName,
            "nickname":signUpNickName,
            "email":signUpEmail,
            "password":signUpPw,
            "phoneNumber":signUpPhoneNumber,
            "birth":signUpBirth,
            "location":signUpRegion,
            "emailCertificationCheck":emailCertificationCheck,
            "signUpPwCk":signUpPwCk,
            "signUpGoodseul":signUpGoodseul,
            "goodseulNick":goodseulNick
    };
    

    const handleEmailCertification = async() => {
        try {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if(signUpEmail === "" || !emailRegex.test(signUpEmail)){
                setCheckCase2(true);
                setCheckCase3(false);
                return
            }
            setCheckCase2(false);
            //이메일 중복체크 엑시오스 실행
            setEmailCertificationLoding(true);
            const emailCheckState = await EmailDuplicateCheck(signUpEmail);
            //const emailCheckState = true;
            if(!emailCheckState) {
                //인증번호 보내는 엑시오스 실행
                setCheckCase13(false);
                setEmailCertificationNumber(await EmailCertification(signUpEmail));
                setEmailCertificationHiddenState(true);
                setEmailCertificationLoding(false);
            }else {
                //이메일 중복일 경우 여기서 처리
                setCheckCase13(true);
                setEmailCertificationLoding(false);
            }
            }catch (error){
                console.log(error);
            }
    }

    const submitEmailCertification = () => {
            if(emailCertificationInput.length !== 6){
                //경고메메시 상태 변경해서 화면에 보여주기
                setCheckCase16(true);
                return
            }
            console.log(emailCertificationNumber);
            if(Number(emailCertificationNumber) === Number(emailCertificationInput)){
                setCheckCase16(false);
                setCheckCase17(false);
                setEmailCertificationCheck(true);
                setEmailCertificationHiddenState(false);
                setEmailCertificationInput("");
            }else{
                //인증번호가 틀렸습니다 메세지
                setEmailCertificationCheck(false);
                setCheckCase16(false);
                setCheckCase17(true);
            }
    }

    const hiddenSignUpGoodseul = () => {
        setGoodseulNick("");
        setSignSpecialty("");
        setMainFileName("파일명");
        setMailFileValue(null);
        setSignGoodseulSpecialty(0);
        setSignGoodseulCareer(0);
        DeleteSpecialtyOptionButton();
        DeleteCareerOptionButton();
        setSignUpGoodseul(!signUpGoodseul);
    }

    const AddSpecialtyOptionButton = () => {
        setSignGoodseulSpecialty(signGoodseulSpecialty+1);
    }

    const DeleteSpecialtyOptionButton:any = () => {
        setSpecialtyOption(false);
        setSpecialtyOption01(false);
        setSpecialtyOption02(false);
        setSpecialtyOption03(false);
        setSpecialtyOption04(false);
        setRegionOption(false);
        setSignGoodseulSpecialty(signGoodseulSpecialty-1);
        switch(signGoodseulSpecialty){
            case 1:
                setSignSpecialty01("");
                break;
                
            case 2:
                 setSignSpecialty02("");
                 break;

            case 3:
                setSignSpecialty03("");
                break;

            default:
                setSignSpecialty04("");
                break;
        }
    }

    const AddCareerOptionButton = () => {
        setSignGoodseulCareer(signGoodseulCareer+1);
    }

    const DeleteCareerOptionButton = () => {
        setSignGoodseulCareer(signGoodseulCareer-1);
        switch(signGoodseulCareer){
            case 1:
                setSubFileName01("파일이름");
                setSubFileValue01(null);
                break;
                
            case 2:
                setSubFileName02("파일이름");
                setSubFileValue02(null);
                 break;

            case 3:
                setSubFileName03("파일이름");
                setSubFileValue03(null);
                break;

            default:
                setSubFileName04("파일이름");
                setSubFileValue04(null);
                break;
        }
    }

    const handleRegionOption = () => {
            setSpecialtyOption(false);
            setSpecialtyOption01(false);
            setSpecialtyOption02(false);
            setSpecialtyOption03(false);
            setSpecialtyOption04(false);
            setRegionOption(!regionOption);
    };

    const handleRegionChange = (event: any) => {
        const selectedRegion = event.target.textContent;
        setSignUpRegion(selectedRegion);
        setRegionOption(false);
    };

    const handleSpecialtyOption = () => {
            setRegionOption(false);
            setSpecialtyOption(!specialtyOption);
            setSpecialtyOption01(false);
            setSpecialtyOption02(false);
            setSpecialtyOption03(false);
            setSpecialtyOption04(false);
    };

    const handleSpecialtyOption01 = () => {
            setRegionOption(false);
            setSpecialtyOption(false);
            setSpecialtyOption01(!specialtyOption01);
            setSpecialtyOption02(false);
            setSpecialtyOption03(false);
            setSpecialtyOption04(false);
    };

    const handleSpecialtyOption02 = () => {
            setRegionOption(false);
            setSpecialtyOption(false);
            setSpecialtyOption01(false);
            setSpecialtyOption02(!specialtyOption02);
            setSpecialtyOption03(false);
            setSpecialtyOption04(false);
    };

    const handleSpecialtyOption03 = () => {
            setRegionOption(false);
            setSpecialtyOption(false);
            setSpecialtyOption01(false);
            setSpecialtyOption02(false);
            setSpecialtyOption03(!specialtyOption03);
            setSpecialtyOption04(false);
    };

    const handleSpecialtyOption04 = () => {
            setSpecialtyOption(false);
            setSpecialtyOption01(false);
            setSpecialtyOption02(false);
            setSpecialtyOption03(false);
            setSpecialtyOption04(!specialtyOption04);
    };

    const specialtyOptionCheck = (selectedSpecialty:any) => {
        switch(selectedSpecialty){
            case signSpecialty:
                return true

            case signSpecialty01:
                return true
            
            case signSpecialty02:
                return true

            case signSpecialty03:
                return true

            case signSpecialty04:
                return true

            default:
                return false
        }
    }

    const handleSpecialtyChange = (event: any) => {
        const selectedSpecialty = event.target.textContent;
        if(specialtyOptionCheck(selectedSpecialty)) {
            alert("이미선택된 특기입니다.");
            setSpecialtyOption(false);
            return;
        }
        setSignSpecialty(selectedSpecialty);
        setSpecialtyOption(false);
    };

    const handleSpecialtyChange01 = (event: any) => {
        const selectedSpecialty = event.target.textContent;
        if(specialtyOptionCheck(selectedSpecialty)) {
            alert("이미선택된 특기입니다.");
            setSpecialtyOption01(false);
            return;
        }
        setSignSpecialty01(selectedSpecialty);
        setSpecialtyOption01(false);
    };

    const handleSpecialtyChange02 = (event: any) => {
        const selectedSpecialty = event.target.textContent;
        if(specialtyOptionCheck(selectedSpecialty)) {
            alert("이미선택된 특기입니다.");
            setSpecialtyOption02(false);
            return;
        }
        setSignSpecialty02(selectedSpecialty);
        setSpecialtyOption02(false);
    };

    const handleSpecialtyChange03 = (event: any) => {
        const selectedSpecialty = event.target.textContent;
        if(specialtyOptionCheck(selectedSpecialty)) {
            alert("이미선택된 특기입니다.");
            setSpecialtyOption03(false);
            return;
        }
        setSignSpecialty03(selectedSpecialty);
        setSpecialtyOption03(false);
    };

    const handleSpecialtyChange04 = (event: any) => {
        const selectedSpecialty = event.target.textContent;
        if(specialtyOptionCheck(selectedSpecialty)) {
            alert("이미선택된 특기입니다.");
            setSpecialtyOption04(false);
            return;
        }
        setSignSpecialty04(selectedSpecialty);
        setSpecialtyOption04(false);
    };
    
    const SpecialtySubInputform = Array.from({length:signGoodseulSpecialty }, (v,i) => (
        <div key={i} className='signUpSpecialtySubInputBody'>
            { i === 0 ? <input className='signUpSpecialtySubInput' readOnly onClick={handleSpecialtyOption01} value={signSpecialty01} type="text" placeholder='특기사항'/> 
            : i === 1 ? <input className='signUpSpecialtySubInput' readOnly onClick={handleSpecialtyOption02} value={signSpecialty02} type="text" placeholder='특기사항'/> 
            : i === 2 ? <input className='signUpSpecialtySubInput' readOnly onClick={handleSpecialtyOption03} value={signSpecialty03} type="text" placeholder='특기사항'/> 
            :<input className='signUpSpecialtySubInput' readOnly onClick={handleSpecialtyOption04} value={signSpecialty04} type="text" placeholder='특기사항'/>}
            <img className='signUpSpecialtyInputSubToggle' src={toggleIcon} alt='토글아이콘'/>
            <span className='signUpDeleteOptionButton' onClick={DeleteSpecialtyOptionButton}><img src={deleteOptionIcon} alt="마이너스아이콘" /></span>
            { specialtyOption01 && (
                    <div className='signUpOptionList'>
                        <ul>
                            <li onClick={handleSpecialtyChange01}>
                                축하
                            </li>
                            <li onClick={handleSpecialtyChange01}>
                                장례/제사
                            </li>
                            <li onClick={handleSpecialtyChange01}>
                                질병/회복
                            </li>
                            <li onClick={handleSpecialtyChange01}>
                                승진/학업
                            </li>
                            <li onClick={handleSpecialtyChange01}>
                                개업/사업
                            </li>
                        </ul>
                    </div>
                )}
            { specialtyOption02 && (
                    <div className='signUpOptionList'>
                        <ul>
                            <li onClick={handleSpecialtyChange02}>
                                축하
                            </li>
                            <li onClick={handleSpecialtyChange02}>
                                장례/제사
                            </li>
                            <li onClick={handleSpecialtyChange02}>
                                질병/회복
                            </li>
                            <li onClick={handleSpecialtyChange02}>
                                승진/학업
                            </li>
                            <li onClick={handleSpecialtyChange02}>
                                개업/사업
                            </li>
                        </ul>
                    </div>
                )}
            { specialtyOption03 && (
                    <div className='signUpOptionList'>
                        <ul>
                            <li onClick={handleSpecialtyChange03}>
                                축하
                            </li>
                            <li onClick={handleSpecialtyChange03}>
                                장례/제사
                            </li>
                            <li onClick={handleSpecialtyChange03}>
                                질병/회복
                            </li>
                            <li onClick={handleSpecialtyChange03}>
                                승진/학업
                            </li>
                            <li onClick={handleSpecialtyChange03}>
                                개업/사업
                            </li>
                        </ul>
                    </div>
                )}
            { specialtyOption04 && (
                    <div className='signUpOptionList'>
                        <ul>
                            <li onClick={handleSpecialtyChange04}>
                                축하
                            </li>
                            <li onClick={handleSpecialtyChange04}>
                                장례/제사
                            </li>
                            <li onClick={handleSpecialtyChange04}>
                                질병/회복
                            </li>
                            <li onClick={handleSpecialtyChange04}>
                                승진/학업
                            </li>
                            <li onClick={handleSpecialtyChange04}>
                                개업/사업
                            </li>
                        </ul>
                    </div>
                )}
        </div>
    ));

    const signMainFileValue = (e:any) => {
        if(e.target.files[0] && e.target.files[0].size <= maxFileSize) {
            setMainFileName(e.target.value);
            setMailFileValue(e.target.files[0]);          
        }else{
            alert("파일은 사이즈가 너무 큽니다.");
            setMainFileName("");
            setMailFileValue(null);  
        }
    }

    const signSubFile01Value = (e:any) => {
        if(e.target.files[0] && e.target.files[0].size <= maxFileSize) {
            setSubFileName01(e.target.value);
            setSubFileValue01(e.target.files[0]);         
        }else{
            alert("파일은 사이즈가 너무 큽니다.");
            setSubFileName01("");
            setSubFileValue01(null); 
        }
    }

    const signSubFile02Value = (e:any) => {
        if(e.target.files[0] && e.target.files[0].size <= maxFileSize) {
            setSubFileName02(e.target.value);
        setSubFileValue02(e.target.files[0]);        
        }else{
            alert("파일은 사이즈가 너무 큽니다.");
            setSubFileName02("");
            setSubFileValue02(null); 
        }
    }

    const signSubFile03Value = (e:any) => {
        if(e.target.files[0] && e.target.files[0].size <= maxFileSize) {
            setSubFileName03(e.target.value);
            setSubFileValue03(e.target.files[0]);         
        }else{
            alert("파일은 사이즈가 너무 큽니다.");
            setSubFileName03("");
            setSubFileValue03(null); 
        }       
    }

    const signSubFile04Value = (e:any) => {
        if(e.target.files[0] && e.target.files[0].size <= maxFileSize) {
            setSubFileName04(e.target.value);
            setSubFileValue04(e.target.files[0]);        
        }else{
            alert("파일은 사이즈가 너무 큽니다.");
            setSubFileName04("");
            setSubFileValue04(null);
        }
        
    }


    const CareerSubInputform = Array.from({length:signGoodseulCareer }, (v,i) => (
        <div  key={i} className='signCareerSubInputBody'>
            {i === 0 ? 
            <div className='signCareerInput'>
                <input className='signCareerSubInputFileName' readOnly value={subFileName01}/>
                <label className='signCareerSubInputFileLabel'>
                    <span className='signCareerInputbutton'>첨부</span>
                    <input className='signCareerSubInputFile' onChange={signSubFile01Value} type="file" accept="image/*"/>
                </label>
                <span className='signUpCareerDeleteOptionButton' onClick={DeleteCareerOptionButton}><img src={deleteOptionIcon} alt="마이너스아이콘"/></span>
            </div>
            : i === 1 ? 
            <div className='signCareerInput'>
                <input className='signCareerSubInputFileName' readOnly value={subFileName02}/>
                <label className='signCareerSubInputFileLabel'>
                    <span className='signCareerInputbutton'>첨부</span>
                    <input className='signCareerSubInputFile' onChange={signSubFile02Value} type="file" accept="image/*"/>
                </label>
                <span className='signUpCareerDeleteOptionButton' onClick={DeleteCareerOptionButton}><img src={deleteOptionIcon} alt="마이너스아이콘"/></span>
            </div> 
        : i === 2 ? 
            <div className='signCareerInput'>
                <input className='signCareerSubInputFileName' readOnly value={subFileName03}/>
                <label className='signCareerSubInputFileLabel'>
                    <span className='signCareerInputbutton'>첨부</span>
                    <input className='signCareerSubInputFile' onChange={signSubFile03Value} type="file" accept="image/*"/>
                </label>
                <span className='signUpCareerDeleteOptionButton' onClick={DeleteCareerOptionButton}><img src={deleteOptionIcon} alt="마이너스아이콘"/></span>
            </div>
        : 
            <div className='signCareerInput'>
                <input className='signCareerSubInputFileName' readOnly value={subFileName04}/>
                <label className='signCareerSubInputFileLabel'>
                    <span className='signCareerInputbutton'>첨부</span>
                    <input className='signCareerSubInputFile' onChange={signSubFile04Value} type="file" accept="image/*"/>
                </label>
                <span className='signUpCareerDeleteOptionButton' onClick={DeleteCareerOptionButton}><img src={deleteOptionIcon} alt="마이너스아이콘"/></span>
            </div>
            }
        </div>
    ));
    

    useEffect(() => {
        if (regionOption || specialtyOption || specialtyOption01 || specialtyOption02 || specialtyOption03 || specialtyOption04) {
            // 스크롤 이벤트를 막음
            document.body.style.overflow = 'hidden';
        } else {
            // 스크롤 이벤트를 복구
            document.body.style.overflow = 'auto';
        }

        // 컴포넌트 언마운트 시 스타일을 원래대로 돌려놓음
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [regionOption, specialtyOption, specialtyOption01, specialtyOption02, specialtyOption03, specialtyOption04]);

    const handleSignUp = (idx:number) => {
        switch(idx){
            case 0:
                setCheckCase0(true);
                setCheckCase1(false);
                setCheckCase2(false);
                setCheckCase3(false);
                setCheckCase4(false);
                setCheckCase5(false);
                setCheckCase6(false);
                setCheckCase7(false);
                setCheckCase8(false);
                setCheckCase9(false);
                break;              
            case 1:
                setCheckCase0(false);
                setCheckCase1(true);
                setCheckCase2(false);
                setCheckCase3(false);
                setCheckCase4(false);
                setCheckCase5(false);
                setCheckCase6(false);
                setCheckCase7(false);
                setCheckCase8(false);
                setCheckCase9(false);
                break;
            case 2:
                setCheckCase0(false);
                setCheckCase1(false);
                setCheckCase2(true);
                setCheckCase3(false);
                setCheckCase4(false);
                setCheckCase5(false);
                setCheckCase6(false);
                setCheckCase7(false);
                setCheckCase8(false);
                setCheckCase9(false);
                break;
            case 3:
                setCheckCase0(false);
                setCheckCase1(false);
                setCheckCase2(false);
                setCheckCase3(true);
                setCheckCase4(false);
                setCheckCase5(false);
                setCheckCase6(false);
                setCheckCase7(false);
                setCheckCase8(false);
                setCheckCase9(false);
                break;
            case 4:
                setCheckCase0(false);
                setCheckCase1(false);
                setCheckCase2(false);
                setCheckCase3(false);
                setCheckCase4(true);
                setCheckCase5(false);
                setCheckCase6(false);
                setCheckCase7(false);
                setCheckCase8(false);
                setCheckCase9(false);
                break;   
            case 5:
                setCheckCase0(false);
                setCheckCase1(false);
                setCheckCase2(false);
                setCheckCase3(false);
                setCheckCase4(false);
                setCheckCase5(true);
                setCheckCase6(false);
                setCheckCase7(false);
                setCheckCase8(false);
                setCheckCase9(false);
                break;
            case 6:
                setCheckCase0(false);
                setCheckCase1(false);
                setCheckCase2(false);
                setCheckCase3(false);
                setCheckCase4(false);
                setCheckCase5(false);
                setCheckCase6(true);
                setCheckCase7(false);
                setCheckCase8(false);
                setCheckCase9(false);
                break;
            case 7:
                setCheckCase0(false);
                setCheckCase1(false);
                setCheckCase2(false);
                setCheckCase3(false);
                setCheckCase4(false);
                setCheckCase5(false);
                setCheckCase6(false);
                setCheckCase7(true);
                setCheckCase8(false);
                setCheckCase9(false);
                break;
            case 8:
                setCheckCase0(false);
                setCheckCase1(false);
                setCheckCase2(false);
                setCheckCase3(false);
                setCheckCase4(false);
                setCheckCase5(false);
                setCheckCase6(false);
                setCheckCase7(false);
                setCheckCase8(true);
                setCheckCase9(false);
                break;
            case 9:
                setCheckCase0(false);
                setCheckCase1(false);
                setCheckCase2(false);
                setCheckCase3(false);
                setCheckCase4(false);
                setCheckCase5(false);
                setCheckCase6(false);
                setCheckCase7(false);
                setCheckCase8(false);
                setCheckCase9(true);
                break;
            case 10:
                setCheckCase0(false);
                setCheckCase1(false);
                setCheckCase2(false);
                setCheckCase3(false);
                setCheckCase4(false);
                setCheckCase5(false);
                setCheckCase6(false);
                setCheckCase7(false);
                setCheckCase8(false);
                setCheckCase9(false);
                setCheckCase10(false);
                setCheckCase11(false);
                if(emailCertificationCheck){
                    setCheckCase3(false);
                    if(signUpNickNameCheck){
                        setCheckCase10(false);
                        if(signUpPhoneNumberCheck){
                            setCheckCase11(false);
                            if(signUpPwCheckState){
                                setCheckCase12(false);
                                if(signUpGoodseul){
                                    signUpGoodseulApi(SignUpGoodseul);
                                    navi('/login');
                                }else{
                                    signUpApi(SignUp);
                                    navi('/login');
                                }
                            }else {
                                setCheckCase12(true);
                            }        
                        }else{
                            setCheckCase11(true);
                        }
                    }else{
                        setCheckCase10(true);
                    }
                }else{
                    setCheckCase3(true);
                }
                return false
            default:
                alert("알수없는오류");
                break;
        }
        // signUpApi(SignUp);
    }

    const NickNameCheck = async () => {
        try {
            if(signUpNickName === ""){
                handleSignUp(1);
                return
            }
            //닉네임 중복 체크 엑시오스 호출
            const signUpNickNameCheck = await nickNameCheck(signUpNickName);
            
            if(!signUpNickNameCheck) {
                setCheckCase1(false);
                setCheckCase10(false);
                setCheckCase14(false);
                setSignUpNickNameCheck(true);
            }else{
                setCheckCase1(false);
                setCheckCase10(false);
                setCheckCase14(true);
                setSignUpNickNameCheck(false);
            }
        } catch (error) {
            
        }
    }

    const PhoneNumberCheck = async () => {
        try {
            if(signUpPhoneNumber === ""){
                handleSignUp(6);
                return
            }
            //01011112222
            //휴대폰번호 중복 체크 엑시오스 호출
            const signUpPhoneNumberCheck = await phoneNumberCheck(signUpPhoneNumber);
            
            if(!signUpPhoneNumberCheck) {
                setCheckCase6(false);
                setCheckCase11(false);
                setCheckCase15(false);
                setSignUpPhoneNumberCheck(true);
            }else{
                setCheckCase6(false);
                setCheckCase11(false);
                setCheckCase15(true);
                setSignUpPhoneNumberCheck(false);
            }

        } catch (error) {
            
        }
    }

    const isSignUpPwShow = () => {
        setSignUpPwShow(!signUpPwShow);
    }

    const isSignUpPwCkShow = () => {
        setSignUpPwCkShow(!signUpPwCkShow);
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
        <form onSubmit={(e) => { e.preventDefault(); handleSignUp(signUpUserCheck(SignUpCheck))}}>
            <div className='signUpInputBody'>
                    <div className='signUpName signUpStyle01'>
                        <div className='signUpNameTxt signUpInputTxtStyle01'>*이름{checkCase0 && <span className='checkInput'>이름을 입력해주세요.</span> }</div>
                        <div className='signUpNameInputBody signUpInputBodyStyle01'>
                            <input className='signUpNameInput signUpInputStyle01' type="text" placeholder='이름' value={signUpName} onChange={changeName} maxLength={4}/>
                        </div>
                    </div>
                    <div className='signUpNickName signUpStyle01'>
                        <div className='signUpNickNameTxt signUpInputTxtStyle01'>*닉네임{checkCase1 ? <span className='checkInput'>닉네임을 입력해주세요.</span> : checkCase10 ? <span className='checkInput'>닉네임 중복확인을 해주세요.</span> : checkCase14 ? <span className='checkInput'>중복된 닉네임입니다.</span> : null}</div>
                        <div className='signUpNickNameInputBody signUpInputBodyStyle01'>
                            <input className='signUpNickNameInput signUpInputStyle01' type="text" disabled={signUpNickNameCheck} placeholder='닉네임' value={signUpNickName} onChange={changeNickName} maxLength={10}/>
                            { !signUpNickNameCheck ? (<div className='signUpIconState' onClick={NickNameCheck}>중복확인</div>) : <div className='signUpIconState' ><img src={successIcon} className='signUpSuccessIcon' alt="성공 아이콘"/></div>}
                        </div>
                    </div>
                    <div className='signUpEmail'>
                        <div className='signUpEmailTxt signUpInputTxtStyle01'>*이메일{ checkCase2 ? <span className='checkInput'>이메일을 정확하게 입력해주세요.</span> : checkCase3 ? <span className='checkInput'>이메일 인증을 진행해 주세요.</span> : checkCase13 ? <span className='checkInput'>중복된 이메일입니다.</span> : null}</div>
                        <div className='signUpEmailStyle'>
                            <div className='signUpInputBodyStyle01'>
                                <input className='signUpEmailInput signUpInputStyle01' type="email" disabled={emailCertificationCheck} placeholder='ID로 사용될 이메일 입니다.' value={signUpEmail} onChange={changeSignUpEmail}/>
                                {emailCertificationCheck ? <div className='signUpIconState' ><img src={successIcon} className='signUpSuccessIcon' alt="성공 아이콘"/></div> : emailCertificationLoding ? <div className='signUpIconState' ><span className="loader"></span></div> : null}
                           </div>
                            { emailCertificationCheck? null : !emailCertificationHiddenState? 
                            (<button className='signUpEmailButton' type='button' onClick={handleEmailCertification}>이메일 인증받기</button>):
                            (<button className='signUpEmailButton' type='button' onClick={handleEmailCertification}>인증번호 다시받기</button>)
                            }
                        </div>
                        {checkCase16 ?  <span className='checkInput emailCheckNumberMsg'>인증번호를 올바르게 입력하세요.</span> : checkCase17 ? <span className='checkInput emailCheckNumberMsg'>인증번호가 틀렸습니다.</span> : null }
                        { emailCertificationHiddenState && (<div className='emailCertification'>
                            <span className='emailCertificationInputBody'>
                                <input className='emailCertificationNumberInput' type="text" maxLength={6} placeholder='인증번호를 입력해주세요' value={emailCertificationInput} onChange={chamgeSignUpEmailCertification} />
                            </span>
                            <button className='emailCertificationButton' onClick={submitEmailCertification} type='button'>확인</button>
                        
                        </div>
                         )}
                    </div>
                    <div className='signUpPw'>
                        <div className='signUpPwInputTxt signUpInputTxtStyle01'>*비밀번호{ (checkCase4 || checkCase5) ? <span className='checkInput'>비밀번호를 입력해주세요.</span> : checkCase12 ? <span className='checkInput'>비밀번호가 일치하지 않습니다.</span> : null}</div>
                        <div className='signUpPwInputBodys'>
                            <div className='signUpPwInputBody'>
                                <input className='signUpPwInput signUpInputStyle01' type={signUpPwShow ? "text": "password"} placeholder='암호' value={signUpPw} onChange={changeSignUpPw}/>
                                {!signUpPwShow ? <div className='signUpIconState' onClick={isSignUpPwShow} ><img src={hidePwIcon} className='signUpSuccessIcon' alt="보이기 아이콘"/></div> : <div className='signUpIconState' onClick={isSignUpPwShow}><img src={showPwIcon} className='signUpSuccessIcon' alt="보이기 아이콘"/></div>}
                            </div>
                            <div className='signUpPwInputBody'>
                                <input className='signUpPwInput signUpInputStyle01' type={signUpPwCkShow ? "text": "password"} placeholder='암호 확인' value={signUpPwCk} onChange={changeSignUpPwCk} />
                                {!signUpPwCkShow ? <div className='signUpIconState' onClick={isSignUpPwCkShow}><img src={hidePwIcon} className='signUpSuccessIcon' alt="보이기 아이콘"/></div> : <div className='signUpIconState' onClick={isSignUpPwCkShow}><img src={showPwIcon} className='signUpSuccessIcon' alt="보이기 아이콘"/></div>}
                                {signUpPwCheckState ? <div className='signUpIconState' ><img className='signUpPwSuccessIcon' src={successIcon} alt="" /></div> : <div className='signUpIconState' ><img className='signUpPwSuccessIcon' src={errorIcon} alt="" /></div>}
                            </div>
                        </div>
                    </div>
                    <div className='signUpPhoneNumber signUpStyle01'>
                        <div className='signUpPhoneNumberTxt signUpInputTxtStyle01'>*전화번호{ checkCase6 ? <span className='checkInput'>전화번호를 입력해주세요.</span> : checkCase11 ? <span className='checkInput'>전화번호 중복확인을 해주세요.</span> : checkCase15 ? <span className='checkInput'>중복된 전화번호입니다.</span> : null}</div>
                        <div className='signUpPhoneNumberInputBody signUpInputBodyStyle01'>
                            <input className='signUpPhoneNumberInput signUpInputStyle01' disabled={signUpPhoneNumberCheck} type="text" maxLength={11} placeholder='Ex) 01012345678' value={signUpPhoneNumber} onChange={changeSignUpPhoneNumber}/>
                            {!signUpPhoneNumberCheck ? (<div className='signUpIconState' onClick={PhoneNumberCheck}>중복확인</div>) : <div className='signUpIconState' ><img src={successIcon} className='signUpSuccessIcon' alt="성공 아이콘"/></div>}
                        </div>
                    </div>
                    <div className='signUpBirth signUpStyle01'>
                        <div className='signUpBirthTxt signUpInputTxtStyle01'>*생년월일{ checkCase7 && <span className='checkInput'>생년월일을 입력해주세요.</span> }</div>
                        <div className='signUpBirthInputBody signUpInputBodyStyle01'>
                            <input className='signUpBirthInput signUpInputStyle01' type="text" maxLength={8} placeholder='Ex) 20230904' value={signUpBirth} onChange={changeSignUpBirth}/>
                        </div>
                    </div>
                    <div className='signUpRegion signUpStyle01'>
                        <div className='signUpRegionTxt signUpInputTxtStyle01'>*지역{ checkCase8 && <span className='checkInput'>지역을 선택해주세요.</span> }</div>
                        <div className='signUpRegionInputBody signUpInputBodyStyle01'>
                            <input className='signUpRegionInput signUpInputStyle01' readOnly type="text" placeholder='지역을 선택해 주세요.' onClick={handleRegionOption} value={signUpRegion} onChange={changeSignUpRegion}/>
                            <img className='signUpSpecialtyInputRegionToggle' src={toggleIcon} alt='토글아이콘'/>
                        </div>
                        {   regionOption && (
                    <div className='signUpOptionList'>
                        <ul>
                            <li onClick={handleRegionChange}>
                                서울
                            </li>
                            <li onClick={handleRegionChange}>
                                경기/인천
                            </li>
                            <li onClick={handleRegionChange}>
                                충청도
                            </li>
                            <li onClick={handleRegionChange}>
                                경상도
                            </li>
                            <li onClick={handleRegionChange}>
                                강원도
                            </li>
                            <li onClick={handleRegionChange}>
                                제주
                            </li>
                        </ul>
                    </div>
                )}
                    </div>
                    <div className='signUpGoodseul'>
                        <div className='signUpGoodseulTxt'>
                            <div className='signUpGoodseulTxtMain'>혹시 <span className='signUpGoodseulMainPointTxt'>구슬</span>님 이십니까 ?</div>
                            <div className='signUpGoodseulTxtSub'>추가정보를 입력하여 구슬님 <span className='signUpGoodseulSubPointTxt' onClick={hiddenSignUpGoodseul}>인증</span>을 완료하세요.</div>
                        </div>
                    { signUpGoodseul && (<div className='signUpGoodseulBody'>
                        <div className='signUpGoodseulNickName signUpStyle01'>
                            <div className='signUpGoodseulNickNameTxt signUpInputTxtStyle01'>*횔동명{ checkCase9 && <span className='checkInput'>활동명을 입력해주세요.</span> }</div>
                            <div className='signUpGoodseulNickNameInputBody signUpInputBodyStyle01'>
                                <input className='signUpGoodseulNickNameInput signUpInputStyle01' onChange={changeSignUpGoodseulNick} value={goodseulNick} type="text" placeholder='본인의 활동명을 작성해주세요.' maxLength={8}/>
                            </div>
                        </div>
                        <div className='signUpSpecialty'>
                            <div className='signUpSpecialtyTxt signUpInputTxtStyle01'>특기</div>
                            <div className='signUpSpecialtyInputBody signUpInputBodyStyle01'>
                                <div className='signUpSpecialtyMainInputBody'>
                                    <input className='signUpSpecialtyInput signUpInputStyle01' readOnly onClick={handleSpecialtyOption} value={signSpecialty} type="text"  placeholder='자신이 잘하는 분야를 선택해주세요.'/>
                                    <img className='signUpSpecialtyInputMainToggle' src={toggleIcon} alt='토글아이콘'/>
                                </div>
                                {SpecialtySubInputform}
                            </div>
                            {   signGoodseulSpecialty <= 3 && (<div className='signUpAddOptionButton' onClick={AddSpecialtyOptionButton}><img src={addOptionIcon} alt="플러스아이콘" /></div>)}
                            {specialtyOption && (
                                <div className='signUpOptionList'>
                                    <ul>
                                        <li onClick={handleSpecialtyChange}>
                                            축하
                                        </li>
                                        <li onClick={handleSpecialtyChange}>
                                            장례/제사
                                        </li>
                                        <li onClick={handleSpecialtyChange}>
                                            질병/회복
                                        </li>
                                        <li onClick={handleSpecialtyChange}>
                                            승진/학업
                                        </li>
                                        <li onClick={handleSpecialtyChange}>
                                            개업/사업
                                        </li>
                                    </ul>
                                </div>
                            )}                  
                       </div>
                        <div className='signCareer'>
                            <div className='signCareerTxtMain signUpInputTxtStyle01'>경력</div>
                            <div className='signCareerTxtSub'>자신의 경력을 작성하고 자료를 첨부해 주세요.<br/>
                            첨부된 자료는 검토 후 인증 구슬님 자료로 활용됩니다.(10MB 이하 파일만 등록가능합니다.)</div>
                            <div className='signCareerInputBody'>
                                <div className='signCareerInput'>
                                    <input className='signCareerInputFileName' readOnly value={mainFileName}/>
                                    <label className='signCareerInputFileLabel'>
                                        <span className='signCareerInputbutton'>첨부</span>
                                        <input className='signCareerInputFile' onChange={signMainFileValue} type="file" accept="image/*"/>
                                    </label>
                                </div>
                                {CareerSubInputform}
                            </div>
                            {   signGoodseulCareer <= 3 && (<div className='signUpAddOptionButton' onClick={AddCareerOptionButton}><img src={addOptionIcon} alt="플러스아이콘" /></div>)}
                        </div>
                    </div> )}
                    </div>
                <button className='signUpSubmitButton' type='submit'>HAVE A ‘굿' DAY</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp
