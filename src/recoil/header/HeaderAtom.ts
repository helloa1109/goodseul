import { atom } from 'recoil';

export const HeaderMenuModalAtom = atom<boolean>({
    key: 'HeaderMenuModalAtom',
    default: false,
});

export const IsMainAtom = atom<boolean>({
    key: 'isMainAtom',
    default: false,
});

// export const IsMainFadeAtom = atom<number>({
//     key: 'isMainFadeAtom',
//     default: 
// })