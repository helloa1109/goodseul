export interface goodseulDto {
    career: string;
    goodseulInfo: string;
    goodseulName: string;
    goodseulProfile: string;
    idx: number;
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
    userDto : userDto;
}

interface userDto {
    idx : number;
    goodseulName : string;
    skill : string;
    career : string;
}

export interface Message{
    sender: number;
    message: string;
    receiver: string;
}
