import { axiosPunch } from "../JWT/JWTConfig";

//서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const getCommunityDetailList = async () => {
    try {
        const res = await axiosPunch ({
            method: 'get',
            url: serverUrl+"/api/lv1/board/detail/{idx}"
        })

        console.log(res);

        return res;
    } catch (error) {
        console.error("게시판 상세보기 API 오류",error)
    }
}