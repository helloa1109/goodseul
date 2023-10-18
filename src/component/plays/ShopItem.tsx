import React from 'react';
import { axiosPunch } from '../../apis/JWT/JWTConfig';
type item = {
    cp_idx:number,
    name?:string,
    detail?:number,
    price?:number,
    src?:string,
    option?:string,
}
const ShopItem = (item:item) => {
    let serverUrl = 'http://dopeboyzclub.ddns.net:7780';
    const buyCoupon = async () =>{
        let response = await axiosPunch({
            method:'post',
            url:`${serverUrl}/api/lv1/usercoupon`,
            data:{cp_idx:item.cp_idx}
        });
        if(response.status === 200 && response.data){
            alert('쿠폰을 구매하였습니다.');
        }else{
            alert('쿠폰을 구매하지 못하였습니다.');
        }
    }
    return (
        <li>
            <div className='shoph'>
                <span className='c5 s3'>{item.option}</span><br />
                <h1>{item.name}</h1>
            </div>
            <img src={`http://dopeboyzclub.ddns.net:7733/images/${item.src || 'noimg'}`} alt='ddd' />
            <div className='shopt'>
                <span>ㅇ {item.price}</span>
                <button onClick={buyCoupon}>구입하기</button>
            </div>
        </li>
    );
};

export default ShopItem;