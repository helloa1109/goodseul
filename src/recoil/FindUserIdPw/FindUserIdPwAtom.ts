import { atom } from 'recoil';

export const isFindIdAtom = atom<boolean>({
    key: 'isFindIdAtom',
    default: true,
})

export const isPathTrueAtom = atom<boolean>({
    key: 'isPathTrueAtom',
    default: true,
})

export const resIdAtom = atom<string>({
    key: 'resId',
    default: ""
})

export const resPwAtom = atom<string>({
    key: 'resPw',
    default: ""
})

export const resEmailAtom = atom<string>({
    key: 'findEmail',
    default: ""
})


export const resNumberAtom = atom<string>({
    key: 'resNumber',
    default: ""
})

export const ShowChecktPw = atom<boolean>({
    key: 'ShowChecktPw',
    default : false,
})

export const ShowChecktPw1 = atom<boolean>({
    key: 'ShowChecktPw1',
    default : false,
})

export const isCorrectPwAtom = atom<boolean>({
    key: 'isCorrectPwAtom',
    default: false,
})