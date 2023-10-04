import axios from "axios";
import { tokenExpCheck } from "./tokenExpCheck"
import { Token } from "../../hooks/JWT/JWTType";


// let serverUrl:string = "http://192.168.0.102:8080";
let serverUrl:string = "http://dopeboyzclub.ddns.net:7780";

export const tokensRefresh = (refreshToken:Token) => {
    const accessToken:Token = localStorage.getItem('accessToken');
    axios({
        method:'get',
        url: serverUrl + "/api/jwt-test",
        headers: { 'Authorization-refresh': `Bearer ${refreshToken}`}
    }).then(res => {
        if(res?.status === 200 ) {
            const newAccessToken:string = res.headers['authorization'];
            const newRefreshToken:string = res.headers['authorization-refresh'];
            console.log("newAccessToken" + newAccessToken);
            console.log("newRefreshToken" + newRefreshToken);
            localStorage.setItem('accessToken', newAccessToken);
            localStorage.setItem('refreshToken', newRefreshToken);
        }else{
            console.log("애러는 여기에 : " + res);
            alert("호출 애러 : " + res.status);
        }
    }).catch(error => {
        return error;
    }) 
    
    return localStorage.getItem('accessToken');
}

export const axiosPunch = axios.create();

axiosPunch.interceptors.request.use(
    async (config) => {
        const accessToken:Token = localStorage.getItem('accessToken');
        const refreshToken:Token = localStorage.getItem('refreshToken');
        console.log(1);
        //refreshToken이 존재하고 refreshToken의 만료시간이 지났거나 refreshToken이 없으면
        if((!tokenExpCheck(refreshToken) && refreshToken) || refreshToken === null){
            console.log(2);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            alert("로그아웃 되었습니다.");
            window.location.reload();
        //accessToken 이 만료되고 refreshToken 이 존재할때
        } else if((!tokenExpCheck(accessToken) && refreshToken)){
            console.log(3);
            const accessToken:Token = await tokensRefresh(refreshToken);
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }else if(accessToken) {
            console.log(4);
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        throw error;
    }
);

