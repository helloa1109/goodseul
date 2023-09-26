import { useRecoilState } from "recoil";
import { isLoginState } from "../../recoil/JWT/JWTAtom";
import { Token } from "../../hooks/JWT/JWTType";
import { useEffect } from "react";

const useLoginCheck = () => {
    const isLogin:boolean = false;
    const accessToken:Token = localStorage.getItem('accessToken');
    const currentTime:number = Math.floor(Date.now() / 1000);
    const JWTExp:number = 123;

    useEffect (() => {
        isLoginCheck();
    },[]);
    
    const isLoginCheck = () => {
        if(accessToken === null){

        }
    }

    return {
        isLogin
    };
}

export default useLoginCheck;