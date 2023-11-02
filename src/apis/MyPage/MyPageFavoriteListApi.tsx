import { axiosPunch } from "../JWT/JWTConfig";


// 서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const getMyPageFavoriteList = async () => {
    try {
        const res = await axiosPunch ({
            method: 'get',
            url: serverUrl+"/api/lv1/favorite/",
        })
        console.log(res);
    
        return res;
    } catch(error) {
        console.error("Error",error);
    }
}

export const delMyPageFavorite = async (g_idx: number) => {
    console.log("gidx",g_idx);
    try {
        const res = await axiosPunch({
            method: 'delete',
            url: `${serverUrl}/api/lv1/favorite/${g_idx}`
        });
        console.log("res",res);
    } catch (error) {
        console.error("삭제 중 오류가 발생했습니다.", error);
    }
}