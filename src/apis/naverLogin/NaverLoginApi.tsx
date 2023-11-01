import axios from "axios";

export const NaverLoginApi = async (code:string) => {
    try {
        const res = await axios({
            method:'post',
            url: "http://dopeboyzclub.ddns.net:7780/api/lv0/naver",
            data: JSON.stringify({code : code}),
            headers: { 'Content-Type': 'application/json' }
        });
        if(res?.status === 200 ) {
            localStorage.setItem('accessToken', res.headers['authorization']);
            localStorage.setItem('refreshToken', res.headers['authorization-refresh']);
            window.location.href = "/";
        }else if(res?.status === 202){
            return res
        }else if(res?.status === 226) {
            alert(res.data);
            window.location.href = "/";
        }
      } catch (error:any) {
        throw error;
      }
}