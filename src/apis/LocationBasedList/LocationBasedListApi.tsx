import axios from "axios";

// 서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const getGoodSeulList = async (idx:number) => {
    try {
        const res = await axios({
            method: 'get',
            url: (`${serverUrl}/api/lv0/userlist?idx=${idx}`),
            headers: { 'Content-Type': 'application/json' },
        })
        console.log(res.data);

        return res.data;
    } catch (error) {
        console.error("Error:", error);
        throw error; 
    }
}