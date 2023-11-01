import { useNavigate } from "react-router-dom";
import { NaverLoginApi } from "../naverLogin/NaverLoginApi";

import React, { useEffect } from 'react'

const SocialNaverCallback = () => {
    const navi = useNavigate();
    const CallBackApi = async () => {
        const url = new URL(window.location.href);
        const searchParams = new URLSearchParams(url.search);
        const code = searchParams.get('code');
        if(code) {
            const res = await NaverLoginApi(code);
            if(res){
            navi('/SocialSignUp', { state: { resdata: res.data, socialType: 'NAVER' } });
            }
        }else{
            alert("다시시도해주세요.");
            window.location.href = "/";
        }
    }

    useEffect(() => {
        CallBackApi();
    },[])
    
  return (
    <>
    </>
  )
}

export default SocialNaverCallback;

