import { Token, decodeToken } from "../../hooks/JWT/JWTType";
import jwt_decode from "jwt-decode";
import { loginState } from "./JWTisLoginState";

export const JWTDecoding = () => {
    const accessToken:Token = localStorage.getItem('accessToken');
    if(accessToken && loginState()){
            const TokenDecoding:decodeToken = jwt_decode(accessToken);
            return TokenDecoding;
    }else {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        alert("로그인 정보가 만료되었습니다.");
        window.location.href = `http://localhost:3000/Login?returnPath=${window.location.pathname}`;
        return false;
    }
}