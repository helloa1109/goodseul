import { Token } from "../../hooks/JWT/JWTType";
import { tokenExpCheck } from "./tokenExpCheck";


export const loginState = () => {
        const accessToken:Token = localStorage.getItem('accessToken');
        const refreshToken:Token = localStorage.getItem('refreshToken');
        console.log("7");
        //refreshToken이 존재하고 refreshToken의 만료시간이 지났거나 refreshToken이 없으면
        if(!refreshToken || !tokenExpCheck(refreshToken)){
            console.log("8");
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return false;
        //accessToken 이 만료되고 refreshToken 이 존재할때
        } else if((!tokenExpCheck(accessToken) && refreshToken)){
            console.log("9");
            return true;
        }else if(accessToken) {
            console.log("10");
            return true;
        }else{
            console.log("11");
            return false;
        }
    }