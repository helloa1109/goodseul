import { atom } from 'recoil';

export const GoodSeulIdxAtom = atom<number>({
    key: 'GoodSeulIdxAtom',
    default: 0,
});