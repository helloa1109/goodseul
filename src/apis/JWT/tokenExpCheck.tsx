import { Token, decodeToken } from "../../hooks/JWT/JWTType";
import jwt_decode from "jwt-decode";

export const tokenExpCheck = (token:Token) => {
    console.log(7);
    if(token === null){
        console.log(8);
        return false;
    }else{
        const TokenDecoding:decodeToken = jwt_decode(token);
        const currentTime:number = Math.floor(Date.now() / 1000);
        const JWTExp:number = TokenDecoding.exp;
        console.log(JWTExp);
        console.log(currentTime);
        console.log("JWTExp >= currentTime : " + (JWTExp >= currentTime));
        return JWTExp >= currentTime;
    }
}