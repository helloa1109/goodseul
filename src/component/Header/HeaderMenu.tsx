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
                    
                    <li>
                        페이지1
                    </li>
                    <li>
                        페이지2
                    </li>
                    <li>
                        페이지3
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderMenu;
