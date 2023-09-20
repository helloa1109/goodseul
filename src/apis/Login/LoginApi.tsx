import axios from "axios";
import { login } from "../../hooks/Login/LoginTypes";


let severUrl:string = "http://192.168.0.106:8080";

export const loginApi = (loginID:string,loginPW:string) => {
    const IdPw:login = {"email":loginID , "password":loginPW};
    axios({
        method:'post',
        url:severUrl + "/login",
        data:JSON.stringify(IdPw),
        headers:{'Content-Type': 'application/json'}
    })
    .then(res => {
        alert("axios 통과");
    })
    .catch(err => {
        alert("axios 실패");
    });
}
