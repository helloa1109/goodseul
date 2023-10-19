import { type } from "os"

export type signUp = {
    birth: string,
    email: string,
    location: string,
    name: string,
    nickname: string,
    password: string,
    phoneNumber: string
}
export type signUpGoodseul =  {
        goodseulName: string,
        skill: string
} 

export type signUpCheck = signUp & {
    emailCertificationCheck: boolean,
    signUpPwCk: string,
    signUpGoodseul: boolean,
    goodseulNick: string
}

