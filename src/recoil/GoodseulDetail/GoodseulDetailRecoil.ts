import { atom } from "recoil";
import { GoodseulDetailList } from '../../hooks/GoodseulDetail/GoodseulDetailHooks';

export const GoodseulDetailListState = atom<GoodseulDetailList[]>({
    key: 'GoodseulDetailListState',
    default: [],
});