import axios from "axios";
import { login } from "../../hooks/Login/LoginTypes";

// let serverUrl:string = "http://192.168.0.102:8080";
let serverUrl:string = "http://dopeboyzclub.ddns.net:7780";

export const LoginApi = async (IdPw:login) => {
    try {
      const res = await axios({
        method: 'post',
        url: serverUrl + "/login",
        data: JSON.stringify(IdPw),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res?.status === 200) {
        localStorage.setItem('accessToken', res.headers['authorization']);
        localStorage.setItem('refreshToken', res.headers['authorization-refresh']);
      } else {
        console.log(res);
      }  
    } catch (error:any) {
      throw error;
    }
  }

// export const LoginApi = (IdPw: login) => {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: 'post',
//         url: serverUrl + "/login",
//         data: JSON.stringify(IdPw),
//         headers: { 'Content-Type': 'application/json' }
//       })
//         .then(res => {
//           // 로그인 성공시 status: 200
//           if (res?.status === 200) {
//             localStorage.setItem('accessToken', res.headers['authorization']);
//             localStorage.setItem('refreshToken', res.headers['authorization-refresh']);
//             alert("로그인 성공");
//             resolve(res); // 성공적인 응답을 resolve로 전달
//           } else {
//             console.log("애러는 여기에 : " + res);
//             alert("로그인 애러 : " + res.status);
//             reject(res); // 오류 응답을 reject로 전달
//           }
//         })
//         .catch(error => {
//           console.log("axios 호출 애러 : " + JSON.stringify(error.response.status));
//           reject(error); // 오류를 reject로 전달
//         });
//     });
//   };

  
  