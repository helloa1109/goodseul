import axios from "axios";
import { signUp } from "../../hooks/SignUp/SignUpTypes";


let severUrl:string = "http://192.168.0.106:8080";

export const signUpApi = (SignUp:signUp) => {
    axios({
        method:'post',
        url:severUrl + "/api/lv0/sign-up",
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