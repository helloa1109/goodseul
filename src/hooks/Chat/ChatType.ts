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

export interface chatHistory {
    message : string;
    readCheck : boolean;
    receiver : number;
    sendTime : sendTime;
    sender : number;
}

export interface chatRoomList {
    isGoodseul: number;
    nickname: string;
    userIdx: number;
    userPhoto : string;
    lastChat : string;
}

interface sendTime {
    date: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    year: number;
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
    readCheck: boolean;
    sendTime : sendTime;
}
