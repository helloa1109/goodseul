import React from 'react'
import "../../style/Mypage/MypageRecent.scss";
import test from "../../image/GuseulDetail/GuseulDetailImg01.jpg";

const MypageRecent = () => {

    const regionImages = [test, test, test, test, test];
    const regionTexts = ["조경철", "이상혁", "신동휘", "경상도", "제주"];
    return (
        <div className='MypageRecent'>
            <div className='MypageRecentHeader'>
                <div className='MypageRecentInfo'>
                    {regionImages.map((imageUrl, index) => (
                        <div className='MypageRecentGroup' key={index}>
                            <div className='MypageRecentItem'>
                                <div className='MypageRecentPhoto'>
                                    <img src={imageUrl} alt='ㅇㅇ' className='MypageUserRecentlyImg' />
                                </div>
                                <div className='MypageRecentUserNick'>{regionTexts[index]} 구슬님</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MypageRecent
