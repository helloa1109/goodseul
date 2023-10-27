import { atom } from "recoil";
import { PurposeBData } from "../../hooks/Purpose/Purpose";

export const searchResultPState = atom<PurposeBData[]>({
    key: 'searchResultPState',
    default :[],
})