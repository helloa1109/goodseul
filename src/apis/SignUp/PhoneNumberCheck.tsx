import axios from "axios";

export const phoneNumberCheck = async (phoneNumber:string) => {
    try {
        const res = await axios({
            method: 'post',
            url: "http://dopeboyzclub.ddns.net:7780/api/lv0/phonecheck",
            data: {phoneNumber:phoneNumber},
            headers: { 'Content-Type': 'application/json' }
        });
        if(res?.status === 200 ) {
            return res.data;
        }else{
            return res.data;
        }
    } catch (error:any) {
        throw error;
    }
}