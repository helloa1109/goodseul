import axios from "axios";
import { login } from "../../hooks/Login/LoginTypes";


let severUrl:string = "http://192.168.0.106:8080";
// 오타 고쳐라 
// - 이상혁

export const handleLoginApi = (IdPw: login) => {
    axios({
      method: 'post',
      url: severUrl + "/login",
      data: JSON.stringify(IdPw),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        // Authorization 및 Authorization-Refresh 헤더에서 값 추출
        const authorizationHeader = res.headers['authorization'];
        const authorizationRefreshHeader = res.headers['authorization-refresh'];
  
        // 추출한 값 콘솔에 출력
        console.log("Authorization:", authorizationHeader);
        console.log("Authorization-Refresh:", authorizationRefreshHeader);
      })
      .catch(err => {
        alert("axios 실패");
      });
  }