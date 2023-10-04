import axios, { AxiosResponse } from "axios";
import { MyDTO } from "../../hooks/Request/RequestType";
// 서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const ReviewListApi = (): Promise<AxiosResponse> => {
    return axios({
        method: 'get',
        url: `${serverUrl}/api/lv0/review?page=0&size=6&sortDirection=DESC&sortProperty=rCreateDate`,
    });
}

export const RequestWrite = (requestData: any) => { // 파라미터를 객체로 받도록 수정
    axios({
        method: 'post',
        url: serverUrl + "/api/lv1/offer",
        data: {
            desiredDate: {
                date: requestData.selectedDate.getDate(),
                month: requestData.selectedDate.getMonth() + 1,
                year: requestData.selectedDate.getFullYear(),
                hours: requestData.selectedDate.getHours(),
                minutes: requestData.selectedDate.getMinutes(),
                seconds: requestData.selectedDate.getSeconds(),
                nanos: 0,
                time: requestData.selectedDate.getTime(),
            },
            details: requestData.details,
            location: requestData.location,
            purpose: requestData.purpose,
        },
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        console.log("서버 응답:", response);
    })
    .catch(error => {
        console.error("에러 발생:", error);
    });
}
