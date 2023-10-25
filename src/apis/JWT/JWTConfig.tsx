import axios, { AxiosInstance } from "axios";
import { tokenExpCheck } from "./tokenExpCheck"
import { Token } from "../../hooks/JWT/JWTType";
import { useNavigate } from "react-router-dom";


// let serverUrl:string = "http://192.168.0.102:8080";
let serverUrl:string = "http://dopeboyzclub.ddns.net:7780";

export const tokensRefresh = async (refreshToken:Token) => {
    console.log("refreshToken : " + refreshToken)
    try {
        const res = await axios({
            method:'get',
            url: "http://dopeboyzclub.ddns.net:7780/api/lv1/check",
            headers: { 'Authorization-refresh': `Bearer ${refreshToken}`}
        });
        if(res?.status === 200 ) {
            const newAccessToken:string = res.headers['authorization'];
            const newRefreshToken:string = res.headers['authorization-refresh'];
            localStorage.setItem('accessToken', newAccessToken);
            localStorage.setItem('refreshToken', newRefreshToken);
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
        const accessToken:Token = localStorage.getItem('accessToken');
        const refreshToken:Token = localStorage.getItem('refreshToken');
        //refreshToken이 존재하고 refreshToken의 만료시간이 지났거나 refreshToken이 없으면
        if(!refreshToken || !tokenExpCheck(refreshToken)){
            const navi = useNavigate();
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            alert("로그아웃 되었습니다.");
            navi("/");
            window.location.reload();
        //accessToken 이 만료되고 refreshToken 이 존재할때
        } else if((!tokenExpCheck(accessToken) && refreshToken)){
            const accessToken:Token = await tokensRefresh(refreshToken);
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }else if(accessToken) {
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