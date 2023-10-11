export const JWTHandleError = (error:any) =>{
    if(error){
        switch(error.response.status){
            case 400:
                return "아이디 또는 비밀번호가 틀렸습니다.";

            case 401:
                return "로그인 후 이용 가능합니다.";
            
            case 403:
                return "접근 권한이 없습니다.";

            case 404:
                return "요청받은 리소스를 찾을 수 없습니다.";

            case 500:
                return "서버에 문제가 발생했습니다.";
            
            case 503:
                return "이용자가 너무 많습니다. 잠시후 이용해주세요.";

            default:
                return "서버와의 통신의 오류가 발생했습니다. 오류코드 : " + error.response.status
        }
        
    }else{
        return "알수없는 오류가 발생했습니다."
    }
}