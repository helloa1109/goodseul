import { atom } from "recoil";
import { MyPageFavoritelist } from "../../hooks/MyPage/MyPageFavoriteList";


export const MyPageFavoriteListState = atom<MyPageFavoritelist[]>({
    key: 'MyPageFavoriteListState',
    default: [],
})