import { type } from "os"

export type signUp = {
    birth: string,
    email: string,
    location: string,
    name: string,
    nickname: string,
    password: string,
    phoneNumber: string,
    socialType: string | null,
    socialId: string | null
}
export type signUpGoodseul =  {
        goodseulName: string,
        skill: string
} 

export type signUpCheck = Omit<signUp, 'socialType' | 'socialId'> & {
    emailCertificationCheck: boolean,
    signUpPwCk: string,
    signUpGoodseul: boolean,
    goodseulNick: string
}

