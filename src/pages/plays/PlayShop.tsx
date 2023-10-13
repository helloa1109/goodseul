import React, { useEffect, useState } from 'react';
import { Shoplist } from '../../component/plays';
import { JWTDecoding } from '../../apis/JWT/JWTDecoding';
import { axiosPunch } from '../../apis/JWT/JWTConfig';
import { decodeToken } from '../../hooks/JWT/JWTType';

const PlayShop = () => {
    const serverUrl = "http://dopeboyzclub.ddns.net:7780";
    const [point,setPoint] = useState<number>();
    useEffect(()=>{
        axiosPunch({
            method:'get',
            url:`${serverUrl}/api/lv1/total?member_idx=${(JWTDecoding() as decodeToken).idx}`,
            // data:{member_idx:(JWTDecoding() as decodeToken).idx},
            headers: { "Content-Type": 'application/json'}
        })
        .then(res=> {setPoint(res.data)})
        .catch(err=>console.error(err));
    },[]);
    return (
        <div>
            <h1>보유한 구슬 : {point} ㅇ</h1>
            <Shoplist/>
            <h1>주의사항</h1>
            <h2 className='c3'>
                구매품목의 기한은 1초입니다.<br/>
                1초안에 최종결제까지 사용하지 못하면 증발합니다.
            </h2>
        </div>
    );
};

export default PlayShop;