import React, { useEffect, useState } from 'react';
import ShopItem from './ShopItem';
import '../../style/play/shop.scss';
import { axiosPunch } from '../../apis/JWT/JWTConfig';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../../recoil/JWT/JWTAtom';
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
    const isLogin = useRecoilValue(isLoginState);
    const getBuyableCoupons = async () => {
        let response = (await axiosPunch({
            method: 'get',
            url: `${serverUrl}/api/lv1/coupon?sortDirection=ASC`,
        })).data
        setCoupons(response.buyable_coupons);
    };

    useEffect(() => {
        if(isLogin)
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