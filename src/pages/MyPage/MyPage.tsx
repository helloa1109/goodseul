import React from 'react';
import "../../style/Mypage/Mypage.scss";
import test from "../../image/GuseulDetail/GuseulDetailImg01.jpg";
import MypageRecent from './MypageRecent';
import MypagePlay from './MypagePlay';
import MypageMenu from './MypageMenu';
import MypageMenu2 from './MypageMenu2';

function MyPage() {

    return (
        <div className='Mypage'>
            <div className='MypageUserInfo'>
                <div className='MypageUserProfile'>
                    <img src={test} alt='dd' className='MypageUserProfileImg' />
                </div>
                <div className='MypageUserDetails'>
                    <div className='MypageUserNickName'>
                        <span>닉네임</span>
                    </div>
                    <div className='MypageUserEmail'>
                        <span>goodseul@naver.com</span>
                    </div>
                </div>
            </div>
            <div className='MypageRecentlyGoodSeul'>
                <div className='MypageRecentlyHeader'>
                    <span>최근 본 구슬님</span>
                </div>
                <MypageRecent/>
            </div>
            <MypagePlay/>
            <MypageMenu/>
            <MypageMenu2/>
        </div>
    );
}

export default MyPage;