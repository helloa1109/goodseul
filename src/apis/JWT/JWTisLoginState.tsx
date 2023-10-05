import { Token } from "../../hooks/JWT/JWTType";
import { tokenExpCheck } from "./tokenExpCheck";


export const loginState = () => {
        const accessToken:Token = localStorage.getItem('accessToken');
        const refreshToken:Token = localStorage.getItem('refreshToken');
        //refreshToken이 존재하고 refreshToken의 만료시간이 지났거나 refreshToken이 없으면
        if((!tokenExpCheck(refreshToken) && refreshToken) || refreshToken === null){
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return false;
        //accessToken 이 만료되고 refreshToken 이 존재할때
        } else if((!tokenExpCheck(accessToken) && refreshToken)){
            return true;
        }else if(accessToken) {
            return true;
        }else{
            return false;
        }
    }