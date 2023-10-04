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

export const CategoryArrayValue = atom({
    key: 'categoryArrayValue',
    default: ["축하","장례/제사","질병/회복","승진/학업","개업/사업"],
});

export const OnLoginValue = atom({
    key: 'onLoginValue',
    default: ["실시간","지역","부재중","연락두절","연락가능"],
});

