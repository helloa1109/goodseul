import React, { useEffect } from 'react';
import "../../style/header/HeaderMenu.scss";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { HeaderMenuModalAtom } from "../../recoil/header/HeaderAtom";
import { isLoginState } from '../../recoil/JWT/JWTAtom';

const HeaderMenu = () => {

    const [isOpen,setIsOpen] = useRecoilState(HeaderMenuModalAtom);
    const [isLogin,setIsLogin] = useRecoilState(isLoginState);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

    const handleSignUp = () => {
        navigate("/signup");
    }

    const handleLocation = () => {
        navigate("/Location");
    }

    const handlePurpose = () => {
        navigate("/Purpose");
    }

    const handleReview = () => {
        navigate("/Review");
    }

    const handlePlay = () => {
        navigate("/play");
    }

    const handleRequest = () => {
        navigate("/Request");
    }

    const handleOnAir = () => {
        navigate("/OnAir");
    }

    const handleCommunity = () => {
        navigate("/Community");
    }

    const handleMypage = () => {
        navigate("/Mypage");
    }

    useEffect(() => {
        if (isOpen) {

            document.body.style.overflow = 'hidden';
        } else {

            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleLogout = async () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsOpen(false);
        setIsLogin(false);
        navigate("/");
    }

    return (
        <div className={`HeaderMenumodal ${isOpen ? 'opened' : 'closed'}`}>

            <div className='HeaderMenuList'>
                <ul>
                    {isLogin ? (
                        <li onClick={handleLogout}>
                            로그아웃
                        </li>
                    ) : <li onClick={handleLogin}>
                        로그인</li>}

                    {isLogin ? (
                        null) :
                        <li onClick={handleSignUp}>
                            회원가입
                        </li>
                    }

                    {isLogin ? (
                        <li onClick={handleMypage}>
                            마이페이지
                        </li>
                    ) : null}

                    <li onClick={handleLocation}>
                        위치기반
                    </li>

                    <li onClick={handleReview}>
                        후기
                    </li>

                    <li onClick={handlePurpose}>
                        목적별
                    </li>

                    <li onClick={handlePlay}>
                        플레이
                    </li>

                    <li onClick={handleRequest}>
                        견적요청
                    </li>

                    <li onClick={handleOnAir}>
                        실시간 상담
                    </li>

                    <li onClick={handleCommunity}>
                        커뮤니티
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default HeaderMenu;
