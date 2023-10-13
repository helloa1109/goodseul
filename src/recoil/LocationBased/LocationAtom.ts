import { atom } from 'recoil';
import { GoodSeullist } from "../../hooks/LocationBasedList/LocationBasedList";
export const selectedRegionState = atom({
  key: 'selectedRegionState',
  default: 0,
});


export const selectedLocationState = atom({
  key: 'selectedLocationState',
  default: '', 
});

export const selectedGoodSeulList = atom ({
  key: 'selectedGoodSeulList',
  default: [],
})

export const testList = atom<GoodSeullist[]>({
  key: 'testList',
  default: [],
});