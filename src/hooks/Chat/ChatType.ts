export interface goodseulDto {
    userDto: {
        idx: number;
    };
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
