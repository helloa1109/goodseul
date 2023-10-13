import React from 'react'
import "../../style/Mypage/MypagePlay.scss";
import logo from "../../image/header/GoodSeul-Logo_.png";
import { useNavigate } from "react-router-dom";

const MypagePlay = () => {

    const navigate = useNavigate();

    const HandlePlay = () => {
        navigate("/play/:pID");
    }
    return (
        <div className='MypagePlay'>
            <div className='MypagePlaySection'>
                <div className='MypagePlayUserInfo'>
                    <span>나의 구슬</span>
                    <span>1,000개</span>
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
