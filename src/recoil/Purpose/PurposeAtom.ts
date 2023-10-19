import { atom } from "recoil";
import { PurposeListData } from "../../hooks/Purpose/Purpose";

export const searchResultPState = atom<PurposeListData[]>({
    key: 'earchResultPState',
    default :[],
})