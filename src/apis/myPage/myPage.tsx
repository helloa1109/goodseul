import axios from "axios";
import { axiosPunch } from "../JWT/JWTConfig";
import { RecentlyViewed } from "../../hooks/MyPage/MyPageType";

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

export const RecentlyViewedApi = async (idx:number, image:string, name:string) =>{
    // 로컬 스토리지에서 최근 본 상품 목록을 가져옵니다.
    const RecentlyViewed = JSON.parse(localStorage.getItem('RecentlyViewed') || '[]');

    // 새로운 상품을 추가합니다.
    const NewViewed:RecentlyViewed = { idx: idx, name: name, image: image }; // 여기에서 실제 상품 데이터를 사용하세요.
    RecentlyViewed.unshift(NewViewed);

    // 중복 항목을 제거합니다.
    const uniqueRecentlyViewed = RecentlyViewed.filter((item:any, index:any, self:any) =>
  index === self.findIndex((t:any) => (
    t.idx === item.idx && t.name === item.name && t.image === item.image
  ))
);

    // 최대 5개 항목만 유지합니다.
    while (uniqueRecentlyViewed.length > 5) {
        uniqueRecentlyViewed.pop();
    }

    // 결과를 로컬 스토리지에 저장합니다.
    localStorage.setItem('RecentlyViewed', JSON.stringify(uniqueRecentlyViewed));
} 