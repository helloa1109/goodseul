import axios, { AxiosInstance } from "axios";
import { tokenExpCheck } from "./tokenExpCheck"
import { Token } from "../../hooks/JWT/JWTType";
import { useNavigate } from "react-router-dom";


// let serverUrl:string = "http://192.168.0.102:8080";
let serverUrl:string = "http://dopeboyzclub.ddns.net:7780";

export const tokensRefresh = async (refreshToken:Token) => { 
    try {
        const res = await axios({
            method:'get',
            url: "http://dopeboyzclub.ddns.net:7780/api/lv1/check",
            headers: { 'Authorization-refresh': `Bearer ${refreshToken}`}
        });
        if(res?.status === 200 ) {
            console.log("2");
            const newAccessToken:string = res.headers['authorization'];
            const newRefreshToken:string = res.headers['authorization-refresh'];
            console.log("3");
            localStorage.setItem('accessToken', newAccessToken);
            localStorage.setItem('refreshToken', newRefreshToken);
            console.log("4 newAccessToken : " + newAccessToken);           
        }
      } catch (error:any) {
        throw error;
      }
    
    // axios({
    //     method:'get',
    //     url: "http://dopeboyzclub.ddns.net:7780/api/lv0/check",
    //     headers: { 'Authorization-refresh': `Bearer ${refreshToken}`}
    // }).then(res => {
    //     if(res?.status === 200 ) {
    //         console.log("accessToken" + localStorage.getItem('accessToken'));
    //         const newAccessToken:string = res.headers['authorization'];
    //         const newRefreshToken:string = res.headers['authorization-refresh'];
    //         localStorage.setItem('accessToken', newAccessToken);
    //         localStorage.setItem('refreshToken', newRefreshToken);
    //         console.log("newAccessToken" + newAccessToken)
    //     }
    // }).catch(error => {
    //     return error;
    // }) 
    
    return localStorage.getItem('accessToken');
}

export const axiosPunch:AxiosInstance = axios.create();

axiosPunch.interceptors.request.use(
    async (config) => {
        console.log("1");
        const accessToken:Token = localStorage.getItem('accessToken');
        console.log("accessToken1 : " + accessToken);
        const refreshToken:Token = localStorage.getItem('refreshToken');
        //refreshToken이 존재하고 refreshToken의 만료시간이 지났거나 refreshToken이 없으면
        if(!refreshToken || !tokenExpCheck(refreshToken)){
            console.log("21");
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            alert("로그인세션이 만료되었습니다.");
            window.location.href = "/";
        //accessToken 이 만료되고 refreshToken 이 존재할때
        } else if((!tokenExpCheck(accessToken) && refreshToken)){
            console.log("refreshToken : " + refreshToken);
            const accessToken:Token = await tokensRefresh(refreshToken);
            console.log("newaccessToken : " + accessToken);
            console.log("3");
            config.headers['Authorization'] = `Bearer ${accessToken}`;
            console.log("config : " + `Bearer ${accessToken}`);
        }else if(accessToken) {
            console.log("4");
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        throw error;
    }
);

axiosPunch.interceptors.response.use(
    (response) => response,
    (error) => {
        throw error;
    }
);

axios.interceptors.response.use(
    (res) => res,
    (error) => {
        throw error;
    }
);