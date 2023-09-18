import { atom } from 'recoil';

export const HeaderMenuModal = atom <{
    isOpen : boolean;
    isClosed : boolean;
}>({
    key : 'HeaderMenuModal',
    default: {
        isOpen: false,
        isClosed : true, 
      },
});