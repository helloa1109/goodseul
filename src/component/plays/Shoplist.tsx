import React from 'react';
import ShopItem from './ShopItem';
import '../../style/play/shop.scss';
const Shoplist = () => {
    return (
        <ul id='lstShop'>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
        </ul>
    );
};

export default Shoplist;