import { ReviewLikeDto } from "../../hooks/Review/Review";
import { axiosPunch } from "../JWT/JWTConfig";

const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const reviewLike = (dto:ReviewLikeDto) => {
  return axiosPunch({
    method:'post',
    url:`${serverUrl}/api/lv1/like`,
    data : dto,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const reviewCancleLike = (r_idx:number) =>{
  return axiosPunch({
    method:'delete',
    url:`${serverUrl}/api/lv1/like?r_idx?=${r_idx}`
  })
}