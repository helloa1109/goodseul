import axios from "axios";

const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const reviewBList = () => {
  return axios({
    method:'get',
    url:`${serverUrl}/api/lv0/review/best`,
  });
};