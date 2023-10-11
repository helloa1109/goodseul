import axios from "axios";

// 서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";


export const getGoodSeulList = async (selectedLocation:string) => {
    try {
        const res = await axios({
            method: 'get',
            url: (`${serverUrl}/api/lv0/gslocation?location=${selectedLocation}`),
        })
        console.log("넘어오는 데이터",res.data);

        return res.data;
    } catch (error) {
        console.error("Error:", error);
        throw error; 
    }
}
