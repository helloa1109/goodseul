import { Token, decodeToken } from "../../hooks/JWT/JWTType";
import jwt_decode from "jwt-decode";
import { loginState } from "./JWTisLoginState";

export const JWTDecoding = () => {
    const accessToken:Token = localStorage.getItem('accessToken');
    if(accessToken && loginState()){
            const TokenDecoding:decodeToken = jwt_decode(accessToken);
            console.log("여기다 : " + loginState());
            return TokenDecoding;
    }else {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        alert("로그인 후 이용해주세요.");
        window.location.href = 'http://localhost:3000/Login';
        return false;
    }
}