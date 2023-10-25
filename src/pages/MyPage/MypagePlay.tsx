import React from 'react'
import "../../style/Mypage/MypagePlay.scss";
import logo from "../../image/header/GoodSeul-Logo_.png";
import { useNavigate } from "react-router-dom";
import { userInfoAtom } from '../../recoil/MyPage/MyPageAtom';
import { useRecoilValue } from 'recoil';
import { myPage } from '../../hooks/MyPage/MyPageType';

const MypagePlay = () => {
    const userInfo = useRecoilValue<myPage>(userInfoAtom);

    const navigate = useNavigate();

    const HandlePlay = () => {
        navigate("/play/shop");
    }
    return (
        <div className='MypagePlay'>
            <div className='MypagePlaySection'>
                <div className='MypagePlayUserInfo'>
                    <span>나의 구슬</span>
                    <span>{userInfo.myPoint}개</span>
                </div>
                <div className='MypagePlayLogo' onClick={HandlePlay}>
                    <img src={logo} alt='logo' className='MypagePlayLogoImg' />
                    <span>구슬 사용하기</span>
                </div>
            </div>
        </div>
    )
}

export default MypagePlay
