import { axiosPunch } from "../JWT/JWTConfig";


// 서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const getMypageReviewList = async () => {
    try {
        const res = await axiosPunch ({
            method: 'get',
            url: serverUrl+"/api/lv1/mypage/review",
        })
        console.log(res);

        return res;
    } catch(error) {
        console.error("Error:",error);
    }

}