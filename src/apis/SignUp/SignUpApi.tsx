import axios from "axios";
import { signUp, signUpGoodseul } from "../../hooks/SignUp/SignUpTypes";
import { JWTHandleError } from "../JWT/JWTHandleError";


let serverUrl:string = "http://dopeboyzclub.ddns.net:7780";

export const signUpApi = async (SignUp: signUp) => {
  
    try {
      const response = await axios({
        method: 'post',
        url: "http://dopeboyzclub.ddns.net:7780/api/lv0/user/sign-up",
        data: JSON.stringify(SignUp),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // HTTP 상태 코드를 확인하여 성공 여부를 판단하거나 다른 작업 수행
      if (response.status === 200) {
        alert("일반 회원가입 성공");
      } else {
        // 실패한 경우 처리
        console.error("HTTP 오류:", response.status);
      }
    } catch (error) {
      // 에러 처리
      console.log(error);
      JWTHandleError(error);
    }
  };
  

  export const signUpGoodseulApi = async (signUpGoodseul: signUpGoodseul) => {
  
    try {
      const response = await axios({
        method: 'post',
        url: "http://dopeboyzclub.ddns.net:7780/api/lv0/goodseul/sign-up",
        data: JSON.stringify(signUpGoodseul),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // HTTP 상태 코드를 확인하여 성공 여부를 판단하거나 다른 작업 수행
      if (response.status === 200) {
        alert("구슬 회원가입 성공");
      } else {
        // 실패한 경우 처리
        console.error("HTTP 오류:", response.status);
      }
    } catch (error) {
      // 에러 처리
      console.log(error);
      JWTHandleError(error);
    }
  };