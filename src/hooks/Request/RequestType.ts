export interface Review {
    star: number;
    goodseulName: string;
    skill: string;
    isPremium: number;
    uidx: number;
    uname: string;
    ridx: number;
    rsubject: string;
    rcontent: string;
    rtype: string;
    gidx: number;
    rcreateDate: string;
}

export interface ReviewListResponse {
    reviews: Review[];
    totalPages: number;
    hasNext: boolean;
    currentPage: number;
    totalElements: number;
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
  
