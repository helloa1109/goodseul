import { atom } from 'recoil';

export const ShowCalendar  = atom<boolean>({
    key: 'showCalendar',
    default: false,
});

export const ShowRegion = atom<Boolean>({
    key: 'showRegion',
    default: false,
});

export const ShowCategory = atom<Boolean>({
    key: 'showCategory',
    default: false,
});

export const RegionValue = atom({
    key: 'regionValue',
    default: '',
});

export const CategoryValue = atom({
    key: 'categoryValue',
    default: '',
});
