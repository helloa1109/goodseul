import React from 'react';
import "../../style/header/HeaderMenu.scss";

const HeaderMenu = () => {


    return (
        <div className='HeaderMenumodal' >
            <div className='HeaderMenuList'>
                <ul>
                    <li>
                        로그인
                    </li>
                    <li>
                        회원가입
                    </li>
                    <li>
                        페이지1
                    </li>
                    <li>
                        페이지2
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderMenu;
