import { axiosPunch } from "../JWT/JWTConfig";

const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const reviewLike = () => {
  return axiosPunch({
    method:'get',
    url:`${serverUrl}/api/lv1/like`,
  });
};