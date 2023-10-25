import { atom } from "recoil";
import { OnAirSlideMenuHooksType } from "../../hooks/OnAir/OnAirSlideMenuHooks";

export const OnAirSlideMenuState = atom<OnAirSlideMenuHooksType[]>({
    key: 'OnAirSlideMenuState',
    default: [],
});