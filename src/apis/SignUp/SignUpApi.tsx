import axios from "axios";
import { signUp } from "../../hooks/SignUp/SignUpTypes";


let severUrl:string = "http://192.168.0.106:8080";

export const signUpApi = (signUpEmail:string,signUpPw:string,signUpNickName:string,signUpPhoneNumber:string) => {
    const SignUp:signUp = { "email":signUpEmail , "password":signUpPw, "nickname":signUpNickName, "phonenumber":signUpPhoneNumber };
    axios({
        method:'post',
        url:severUrl + "/lv0/sign-up",
        data:JSON.stringify(SignUp),
        headers:{'Content-Type': 'application/json'}
    })
    .then(res => {
        alert("axios 통과");
    })
    .catch(err => {
        alert("axios 실패");
    });
    
}