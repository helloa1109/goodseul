import axios, { AxiosResponse } from "axios";
import { ReviewCData } from '../../hooks/Review/Review'

const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const reviewList = () => {
  return axios({
    method:'get',
    url:`${serverUrl}/api/lv0/review/best`,
  });
};