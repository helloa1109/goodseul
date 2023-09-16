import { atom } from 'recoil';

export const currentPageState = atom({
  key: 'currentPage',
  default: '/',
});

export const HeaderMenuModal = atom ({
    key : 'HeaderMenuModal',
    default : false,
})