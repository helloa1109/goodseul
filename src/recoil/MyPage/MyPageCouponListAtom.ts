import { atom } from "recoil";
import { MyPageCouponlist } from "../../hooks/MyPage/MyPageCouponList";


export const MyPageCouponListState = atom<MyPageCouponlist[]>({
    key: 'MyPageCouponListState',
    default: [],
})