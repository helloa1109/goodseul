import { atom } from 'recoil';

export const RoomIdxAtom = atom<string>({
    key: 'RoomIdxAtom',
    default: ''
})

export const person1State = atom<number>({
    key: 'person1State',
    default: 0,
});

export const person2State = atom<number>({
    key: 'person2State',
    default: 0,
});