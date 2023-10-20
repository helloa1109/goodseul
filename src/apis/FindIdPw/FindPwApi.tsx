import axios from "axios";

export const findPwApi = async (name:string,email:string,birth:string) =>{
    try {
        const response = await axios({
          method: 'post',
          url: "http://dopeboyzclub.ddns.net:7780/api/lv0/check",
          data: JSON.stringify({ 'email' : email,
                                  'birth' : birth,
                                  'name' : name }),
          headers: { 'Content-Type': 'application/json' }
        });  
        // HTTP 상태 코드를 확인하여 성공 여부를 판단하거나 다른 작업 수행
        if (response.status === 200) {
            console.log(response);
          return response.data;
        } else {
          // 실패한 경우 처리
          console.log(response.status);
          return response.status;
        }
      } catch (error) {
        // 에러 처리
        console.log(error);
        throw error;
      }
}

//휴대폰인증 비밀번호 찾기
export const findPwPhoneCheckApi = async (phoneNumber:string) =>{
  try {
      const response = await axios({
        method: 'post',
        url: "http://dopeboyzclub.ddns.net:7780/api/lv0/sms",
        data: { 'phoneNumber' : phoneNumber },
        headers: { 'Content-Type': 'application/json' }
      });  
      // HTTP 상태 코드를 확인하여 성공 여부를 판단하거나 다른 작업 수행
      if (response.status === 200) {
          console.log(response);
        return response.data;
      } else {
        // 실패한 경우 처리
        console.log(response.status);
        return response.status;
      }
    } catch (error) {
      // 에러 처리
      throw error;
    }
}

export const updatePwApi = async (email:string, password:string) =>{
  try {
    const response = await axios({
      method: 'post',
      url: "http://dopeboyzclub.ddns.net:7780/api/lv0/pwdupdate?email=" + email + "&password=" + password,
    });  
    // HTTP 상태 코드를 확인하여 성공 여부를 판단하거나 다른 작업 수행
    if (response.status === 200) {
        console.log(response);
      return response.data;
    } else {
      // 실패한 경우 처리
      console.log(response.status);
      return response.status;
    }
  } catch (error) {
    // 에러 처리
    throw error;
  }
}

