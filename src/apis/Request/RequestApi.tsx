import axios, { AxiosResponse } from "axios";
import { axiosPunch } from "../JWT/JWTConfig";
// 서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const ReviewListApi = (): Promise<AxiosResponse> => {
    return axios({
        method: 'get',
        url: `${serverUrl}/api/lv0/review?page=0&size=6&sortDirection=DESC&sortProperty=rCreateDate`,
    });
}

export const RequestWrite = (requestData:any) => {
    axiosPunch({
        method: 'post',
        url: serverUrl + "/api/lv1/offer",
        data: requestData,
        headers: { 'Content-Type': 'application/json' }
    })
    
    .then(res => {
        console.log("서버 응답:", res);
    })
    .catch(error => {
        console.error("에러 발생:", error);
        console.log(requestData.details);
        console.log(requestData.location);
        console.log(requestData.purpose);
    });
}
