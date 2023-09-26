import React from 'react'
import LoginCheck from './LoginCheck';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../recoil/Login/LoginAtom';

export const JWTConfig = () => {
    const isLogin = LoginCheck();

    if(isLogin){

    }

}

