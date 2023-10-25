import axios from "axios";

const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const reviewLike = () => {
  return axios({
    method:'get',
    url:`${serverUrl}/api/lv1/like`,
  });
};