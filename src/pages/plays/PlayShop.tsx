import React from 'react';
import { Shoplist } from '../../component/plays';

const PlayShop = () => {
    return (
        <div>
            <h1>보유한 구슬 : 9999 ㅇ</h1>
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