import React from 'react'
import "../../style/FindUserIdPw/FindIdSuccess.scss";
import { isFindIdAtom} from '../../recoil/FindUserIdPw/FindUserIdPwAtom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
const FindIdSuccess = () => {

    const [isFindId, setIsFindId] = useRecoilState<boolean>(isFindIdAtom);

    const navigate = useNavigate();

    const handleFindPw = () => {
        setIsFindId(false);
        navigate("/findidpw");
    }

    return (
        <div className='FindIdSuccess'>
            <div className='FindIdSuccessHeader'>
                <span>구슬 ID 찾기</span>
            </div>
            <div className='FindIdSuccessUserInfo'>
                <span>가입된 구슬 ID 정보</span>
            </div>
            <div className='FindIdSuccessUserId'>
                <div className='SelectCircleOut'>
                    <div className='SelectCircleIn'></div>
                </div>
                <span>goodseul@naver.com</span>
            </div>
            <div className='FindIdSuccessFooter'>
                <span onClick={handleFindPw}>비밀번호 찾기</span>
                <button className='FindIdSuccessBtn'>로그인</button>
            </div>
        </div>
    )
}

export default FindIdSuccess
