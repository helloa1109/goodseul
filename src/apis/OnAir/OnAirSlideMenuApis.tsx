import axios from "axios";

//서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const getOnAirSlideMenuList = async () => {
    try{
        const res = await axios ({
            method: 'get',
            url: serverUrl+"/api/lv0/online",
        })
        console.log(res);

        return res;
        
    }catch(error) {
        console.error("Error",error)
    }
}