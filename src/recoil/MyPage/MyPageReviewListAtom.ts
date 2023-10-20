import { atom } from "recoil";
import { MyPageReviewlist } from "../../hooks/MyPage/MyPageReviewList";

export const MyPageReviewListState = atom<MyPageReviewlist[]>({
    key: 'MyPageReviewListState',
    default: [],    
});