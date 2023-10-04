import { Token, decodeToken } from "../../hooks/JWT/JWTType";
import jwt_decode from "jwt-decode";

export const JWTDecoding = () => {
    const accessToken:Token = localStorage.getItem('accessToken');
    if(accessToken !== null){
        const TokenDecoding:decodeToken = jwt_decode(accessToken);
        return TokenDecoding.exp;
    }else {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.reload();
        return false;
    }

}