import axios from "axios";

export const EmailDuplicateCheck = async (email:string) => {
    try {
        const res = await axios({
            method: 'post',
            url: "http://dopeboyzclub.ddns.net:7780/api/lv0/emailcheck",
            data: JSON.stringify(email),
            headers: { 'Content-Type': 'application/json' }
        });
        if(res?.status === 200 ) {
            console.log(res.data);
            return true;
        }else{
            return true;
        }
    } catch (error:any) {
        throw error;
    }
}

export const EmailCertification = async (email:string) => {
    try {
        const res = await axios({
            method: 'post',
            url: "http://dopeboyzclub.ddns.net:7780/api/lv0/mail?email=" + email,
            headers: { 'Content-Type': 'application/json' }
        });
        if(res?.status === 200) {
            return res.data;
        }else{
            return "";
        }
    } catch (error) {
        throw error
    }
}