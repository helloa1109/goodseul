import { Token, decodeToken } from "../../hooks/JWT/JWTType";
import jwt_decode from "jwt-decode";

export const tokenExpCheck = (token:Token) => {
    if(token === null || !token){
        console.log("tokenExpCheck12 : false");
        return false;
    }else{
        const TokenDecoding:decodeToken = jwt_decode(token);
        const currentTime:number = Math.floor(Date.now() / 1000);
        const JWTExp:number = TokenDecoding.exp;
        console.log("tokenExpCheck : " + (JWTExp - 250 >= currentTime));
        return JWTExp - 250 >= currentTime;
    }
}