import { atom } from "recoil";
import { ReviewCData } from "../../hooks/Review/Review";

export const searchResultState = atom<ReviewCData[]>({
    key: 'searchResultState',
    default: [],
});
  
export const rIdxState = atom({
  key : 'rIdxState',
  default : 0,
});