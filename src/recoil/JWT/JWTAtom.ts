import { atom } from 'recoil';
import { loginState } from '../../apis/JWT/JWTisLoginState';

export const isLoginState = atom ({
    key: 'isLogin',
    default: loginState()
})