import React from 'react';
import FontRed from './FontRed';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../../recoil/JWT/JWTAtom';
type csProps = {
    dest: string,
    src: string,
    str: string,
    order: number,
    str2?: string,
}
const PlayBanner = ({ dest, src, str, str2, order }: csProps) => {
    const isLogin = useRecoilValue(isLoginState);
    const navi = useNavigate();
    
    const handleClick = (dest: string) => {
        if (isLogin)
            navi(`./${dest}`);
        else {
            alert('로그인해야 이용 가능합니다.');
            navi(`/Login?returnPath=/play/${dest}`)
        }
    }

    return (
        <li onClick={() => { handleClick(dest) }} style={{
            backgroundImage:
                order % 2 === 0
                    ? `linear-gradient(75deg,rgba(255,255,255,1) 25%,rgba(255,255,255,0) 65%),url(${src})`
                    : `linear-gradient(105deg,rgba(255,255,255,0) 25%,rgba(255,255,255,1) 65%),url(${src})`,
            backgroundPosition:
                order % 2 === 0
                    ? `right`
                    : `left`,
            alignItems:
                order % 2 === 0
                    ? `flex-start`
                    : `flex-end`,
        }}>
            <FontRed str={str} />
            {str2}
        </li>
    );
};

export default PlayBanner;