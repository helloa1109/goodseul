import React from 'react';
import "../../style/header/HeaderMenu.scss";
import { useNavigate} from "react-router-dom";
import { useRecoilState } from 'recoil';
import {  HeaderMenuModalAtom } from "../../recoil/header/HeaderAtom";
const HeaderMenu = () => {
    
    const [isOpen] = useRecoilState(HeaderMenuModalAtom);
    
    
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

return (
    <div className={`HeaderMenumodal ${isOpen ? 'opened' : 'closed'}`}>

            <div className='HeaderMenuList'>
                <ul>
                    <li onClick={handleLogin}>
                        로그인
                    </li>
                    <li onClick={handleSignUp}>
                        회원가입
                    </li>
                    
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
                </ul>
            </div>
        </div>
    )
}

export default HeaderMenu;
