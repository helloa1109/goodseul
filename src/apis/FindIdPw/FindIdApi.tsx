import axios from "axios";

export const findIdApi = async (birth:string, name:string, phone:string) =>{
    try {
        const response = await axios({
          method: 'post',
          url: "http://dopeboyzclub.ddns.net:7780/api/lv0/find-id?birth=" + birth + "&name=" + name + "&phone=" + phone,
        });  
        // HTTP 상태 코드를 확인하여 성공 여부를 판단하거나 다른 작업 수행
        if (response.status === 200) {
          return response.data;
        } else {
          // 실패한 경우 처리
          console.log(response.status);
          return response.status;
        }
      } catch (error:any) {
        // 에러 처리
        throw error;
      }
}