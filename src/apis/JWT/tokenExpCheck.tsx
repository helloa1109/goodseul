import { Token, decodeToken } from "../../hooks/JWT/JWTType";
import jwt_decode from "jwt-decode";

export const tokenExpCheck = (token:Token) => {
    if(token === null || !token){
        return false;
    }else{
        const TokenDecoding:decodeToken = jwt_decode(token);
        const currentTime:number = Math.floor(Date.now() / 1000);
        const JWTExp:number = TokenDecoding.exp;
        return JWTExp - 250 >= currentTime;
    }
}