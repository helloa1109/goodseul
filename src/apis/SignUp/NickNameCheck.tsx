import axios from "axios";

export const nickNameCheck = async (nickName:string) => {
    try {
        const res = await axios({
            method: 'post',
            url: "http://dopeboyzclub.ddns.net:7780/api/lv0/nicknamecheck",
            data: {nickname:nickName},
            headers: { 'Content-Type': 'application/json' }
        });
        if(res?.status === 200 ) {
            console.log(res.data);
            return res.data;
        }else{
            return res.data;
        }
    } catch (error:any) {
        throw error;
    }
}