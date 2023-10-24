import { atom } from "recoil";
import { MyPageRequestlist } from "../../hooks/MyPage/MyPageRequestList";


export const MyPageRequestListState = atom<MyPageRequestlist[]>({
    key: 'MyPageRequestListState',
    default: [],
})