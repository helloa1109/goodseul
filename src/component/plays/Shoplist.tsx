import React, { useEffect, useState } from 'react';
import ShopItem from './ShopItem';
import '../../style/play/shop.scss';
import { axiosPunch } from '../../apis/JWT/JWTConfig';
type Coupon = {
    buyable: string
    cpDescription: string
    cpIdx: number
    cpName: string
    cpStatus: string
    cpType: string
    discountAmount: number
    endDate?: string
    image?: string
    price: number
    startDate?: string
}
const Shoplist = () => {
    const serverUrl = 'http://dopeboyzclub.ddns.net:7780';
    const [coupons, setCoupons] = useState<Coupon[]>();
    const getBuyableCoupons = async () => {
        let response = (await axiosPunch({
            method: 'get',
            url: `${serverUrl}/api/lv1/coupon?sortDirection=ASC`,
        })).data
        setCoupons(response.buyable_coupons);
    };

    useEffect(() => {
        getBuyableCoupons();
    }, []);

    return (
        <ul id='lstShop'>
            {coupons ?
                coupons.map(v => <ShopItem name={v.cpName} price={v.price} src={v.image} detail={v.discountAmount} cp_idx={v.cpIdx}/>) :
                null
            }
        </ul>
    );
};

export default Shoplist;