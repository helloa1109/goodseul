import { ReviewWriteForm } from "../../hooks/Review/Review";
import { axiosPunch } from "../JWT/JWTConfig";

const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const reviewForm = (dto:ReviewWriteForm) => {
    return axiosPunch({
      method:'post',
      url:`${serverUrl}/api/lv1/review`,
      data : dto,
      headers: { 'Content-Type': 'application/json' },
    });
  };