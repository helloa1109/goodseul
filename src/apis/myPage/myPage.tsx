import axios from "axios";
import { axiosPunch } from "../JWT/JWTConfig";

export const getUserInfoApi = async () => {
    try {
      const res = await axiosPunch({
        method: 'get',
        url: "http://dopeboyzclub.ddns.net:7780/api/lv1/mypage"
      });
      if (res?.status === 200) {
        return res.data;
      } else {
        console.log(res);
      }  
    } catch (error:any) {
      throw error;
    }
  }

export const RecentlyViewedApi = async (idx:number) =>{
    
} 