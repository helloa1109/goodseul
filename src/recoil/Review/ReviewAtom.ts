import { atom } from "recoil";
import { ReviewCData } from "../../hooks/Review/Review";

export const searchResultState = atom<ReviewCData[]>({
    key: 'searchResultState',
    default: [],
  });
  