import React from 'react'
import "../../style/MyPage/MypageRecent.scss";
import test from "../../image/GuseulDetail/GuseulDetailImg01.jpg";
import { RecentlyViewed } from '../../hooks/MyPage/MyPageType';

const MypageRecent = () => {

    const RecentlyViewed = localStorage.getItem('RecentlyViewed');
    let RecentlyViewedArray:RecentlyViewed[];

    if (RecentlyViewed !== null) {
        RecentlyViewedArray = JSON.parse(RecentlyViewed);
    } else {
        // null 처리
        RecentlyViewedArray = []; // 또는 null 또는 다른 처리
    }
    return (
        <div className='MypageRecent'>
            <div className='MypageRecentHeader'>
                <div className='MypageRecentInfo'>
                    {RecentlyViewed !== null ? RecentlyViewedArray.map((item: RecentlyViewed, index:number) => (
                        <div className='MypageRecentGroup' key={index}>
                            <div className='MypageRecentItem'>
                                <div className='MypageRecentPhoto'>
                                    {item.image === "NoImage" ? 
                                    <img src={"http://dopeboyzclub.ddns.net:7733/userprofile/noImage.jpg"} alt='구슬이미지' className='MypageUserRecentlyImg' />
                                    : <img src={"http://dopeboyzclub.ddns.net:7733/userprofile/" + item.image} alt='구슬이미지' className='MypageUserRecentlyImg' />}
                                </div>
                                <div className='MypageRecentUserNick'>{item.name} 구슬님</div>
                            </div>
                        </div>
                    )) :
                    <div className='MypageRecentGroup nullRecentlyViewed'>최근본 구슬님이 없습니다</div> }
                </div>
            </div>
        </div>
    )
}

export default MypageRecent
