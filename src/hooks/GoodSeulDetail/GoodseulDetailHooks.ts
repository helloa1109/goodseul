export interface GoodseulDetailList{
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
        skill: string;
    };
    userDto: {
        birth: string;
        email: string;
        idx: number;
        isGoodseul: number;
        location: string;
        name: string;
        nickname: string;
        password: string;
        phoneNumber: string;
        userProfile: string;
    };
}
