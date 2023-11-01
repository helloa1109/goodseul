export interface GoodSeulInfo {
    goodseulDto: {
      career: string;
      goodseulInfo: string;
      goodseulName: string;
      goodseulProfile: string;
      idx: number;
      isPremium: number;
      premiumDate: {
        date: number;
        day: number;
        hours: number;
        minutes: number;
        month: number;
        nanos: number;
        seconds: number;
        time: number;
        timezoneOffset: number;
        year: number;
      }; 
      skill: string ;
    };
    userDto: {
      career: string; 
      goodseulInfo: string;
      goodseulName: string;
      idx: number;
      skill: string;
      location:string;
    };
  }
  