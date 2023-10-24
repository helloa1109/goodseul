export interface Review {
    star: number;
    goodseulName: string;
    skill: string;
    isPremium: number;
    uprofile: string;
    likeCount : number;
    randSubject: string;
    ridx: number;
    rtype: string;
    rsubject: string;
    rcontent: string;
    rcreateDate: Date;
    gidx: number;
    uidx: number;
    uname: string;
}

export interface DesiredDate {
    date: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    year: number;
  }
  
  export interface WriteDate {
    date: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    year: number;
  }
  
  export  interface MyDTO {
    desiredDate: DesiredDate;
    details: string;
    location: string;
    offerIdx: number;
    purpose: string;
    userIdx: number;
    writeDate: WriteDate;
  }
  
