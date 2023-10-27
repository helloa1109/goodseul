import { atom } from "recoil";
import { CommunityTitleHooksType } from "../../hooks/Community/CommunityTitleHooks";

export const CommunityTitleListState = atom<CommunityTitleHooksType[]>({
    key: 'CommunityTitleListState',
    default: [],
})