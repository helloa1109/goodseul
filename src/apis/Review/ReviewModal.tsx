import axios from "axios";
import { ReviewWriteForm } from "../../hooks/Review/Review";


const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const reviewModal = (clickedRIdx:number) => {
    return axios({
      method:'get',
      url:`${serverUrl}/api/lv0/review/${clickedRIdx}`,
    });
  };