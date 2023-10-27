export type PurposeListData = {
    idx: number;
    goodseulName: string;
    goodseulInfo : string;
    skill: string;
    career: string;
    isPremium: number;
    premiumDate: null;
}
export type PurposeBData = {
    goodseulDto : PurposeListData;
    userProfile : string;
}