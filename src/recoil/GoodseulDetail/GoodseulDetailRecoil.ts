import { atom } from "recoil";
import { GoodseulDetailList } from '../../hooks/GoodSeulDetail/GoodseulDetailHooks';

export const GoodseulDetailListState = atom<GoodseulDetailList[]>({
    key: 'GoodseulDetailListState',
    default: [],
});
