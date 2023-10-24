import { atom } from "recoil";
import { myPage } from "../../hooks/MyPage/MyPageType";

export const userInfoAtom = atom<myPage> ({
    key: 'userInfo',
    default: {
        chatRoomCount: 0,
        couponCount: 0,
        email: '',
        favoriteCount: 0,
        myPoint: 0,
        reviewCount: 0,
      },
})