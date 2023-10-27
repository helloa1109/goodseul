interface GoodSeulProfile {
    career: string;
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
    skill: string;
  }
  
  interface User {
    birth: string;
    email: string;
    idx: number;
    isGoodseul: GoodSeulProfile;
    location: string;
    name: string;
    nickname: string;
    password: string;
    phoneNumber: string;
    refreshToken: string;
    role: string;
  }
  
  interface UserListResponse {
    content: User[];
  }
  
  export default UserListResponse;

  export interface GoodSeullist {
    avgStar : number;
    goodseulDto: GoodSeul
    userProfile : string;
  }

interface GoodSeul {
    carrer : string;
    goodseulInfo:string;
    goodseulName : string;
    idx: number;
    skill : string;
    isPremium: number; 
  }
  