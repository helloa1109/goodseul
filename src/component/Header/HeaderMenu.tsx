import React  from 'react';
import "../../style/header/HeaderMenu.scss";
import { useNavigate } from "react-router-dom";
import { useRecoilState} from 'recoil';
import { HeaderMenuModal } from "../../recoil/header/HeaderAtom";

const HeaderMenu = () => {
    const [HeaderMenuModalOpen, setHeaderMenuModal] = useRecoilState(HeaderMenuModal);

    const navigate = useNavigate();

    const handleTest = () => {
         navigate("/test");
         setHeaderMenuModal({
            isOpen: false,
            isClosed: true,
        });
    }

    const menuClassName = HeaderMenuModalOpen.isClosed
    ? 'HeaderMenumodal closed'
    : 'HeaderMenumodal ';

    console.log("헤더",HeaderMenuModalOpen);
    console.log("classname", menuClassName);

return (
    <div className={menuClassName}>
            <div className='HeaderMenuList'>
                <ul>
                    <li>
                        로그인
                    </li>
                    <li>
                        회원가입
                    </li>
                    <li onClick={handleTest}>
                        테스트
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
