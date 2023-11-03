import { axiosPunch } from "../JWT/JWTConfig";

//서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const getGoodseulDetail = async (pageGoodSeulIdx:number) => {
    try {
        const res = await axiosPunch ({
            method: 'get',
            url: (`${serverUrl}/api/lv1/gs?goodseulIdx=${pageGoodSeulIdx}`),
        })

        return res;

    } catch (error) {
        console.error("구슬 디테일 API 에러",error);
    }
}