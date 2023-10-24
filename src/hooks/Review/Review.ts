export type ReviewCData = {
    star: number;
    goodseulName: string;
    goodseulProfile: string;
    skill: string;
    isPremium: number;
    likeCount:number;
    uidx: number;
    unick: string;
    uprofile: string;
    ridx: number;
    rsubject: string;
    rcontent: string;
    rtype: string;
    randSubject: string;
    gidx: number;
    rcreateDate: string;
};
export type ReviewWriteForm = {
    r_subject : string;
    r_content : String;
    star : number;
    r_type : String;
}