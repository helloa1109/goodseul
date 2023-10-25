import axios from "axios";

export const logoutApi = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const res = await axios({
        method: 'post',
        url: "http://dopeboyzclub.ddns.net:7780/api/lv1/logout",
        headers: { 'Authorization-refresh': `Bearer ${refreshToken}`}
      });
      if (res?.status === 200) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      } else {
        console.log(res);
      }  
    } catch (error:any) {
      throw error;
    }
  }