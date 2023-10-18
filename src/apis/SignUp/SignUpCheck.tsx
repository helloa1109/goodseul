import { signUpCheck } from "../../hooks/SignUp/SignUpTypes"


export const signUpUserCheck = (SignUpCheck: signUpCheck) =>{
    if(SignUpCheck.name === "" ){
        return 0
    }else if(SignUpCheck.nickname === "" ) {
        return 1
    }else if(SignUpCheck.email === "" ) {
        return 2
    }else if(!SignUpCheck.emailCertificationCheck) {
        return 3
    }else if(SignUpCheck.password === "" ) {
        return 4
    }else if(SignUpCheck.signUpPwCk === "") {
        return 5
    }else if(SignUpCheck.phoneNumber === "" || SignUpCheck.phoneNumber.length !== 11) {
        return 6
    }else if(SignUpCheck.birth === "" || SignUpCheck.birth.length !== 8 ) {
        return 7
    }else if(SignUpCheck.location === "") {
        return 8
    }else if(SignUpCheck.signUpGoodseul && SignUpCheck.goodseulNick === "") {
        return 9
    }else{
        return 10
    }
}

export const signUpGoodseulCheck = () =>{

}