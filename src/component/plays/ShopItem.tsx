import React from 'react';

const ShopItem = () => {
    return (
        <li>
            <div className='shoph'>
                <span className='c5 s3'>BEST</span><br />
                <h1>구매가능한 상품 이름 들어갈영역</h1>
            </div>
            <img src='http://dopeboyzclub.ddns.net:7733/testimg/minisize.png' alt='ddd' />
            <div className='shopt'>
                <span>ㅇ 9999</span>
                <button>구입하기</button>
            </div>
        </li>
    );
};

export default ShopItem;