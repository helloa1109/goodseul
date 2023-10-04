import axios from "axios";
import { login } from "../../hooks/Login/LoginTypes";
import { useRecoilState } from "recoil";


// let serverUrl:string = "http://192.168.0.102:8080";
let serverUrl:string = "http://dopeboyzclub.ddns.net:7780";

export const LoginApi = (IdPw:login) => {
    axios({
      method: 'post',
      url: serverUrl + "/login",
      data: JSON.stringify(IdPw),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        //로그인 성공시 status:200
        if(res?.status === 200 ) {

            localStorage.setItem('accessToken', res.headers['authorization']);
            localStorage.setItem('refreshToken', res.headers['authorization-refresh']);

        }else{
            console.log("애러는 여기에 : " + res);
            alert("로그인 애러 : " + res.status);
        }
      })
      .catch(err => {
        alert("axios 호출 애러" + err);
        console.log("axios 호출 애러" + err);
        throw err;
      });
  }