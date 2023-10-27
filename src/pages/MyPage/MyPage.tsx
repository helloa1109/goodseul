import React, { useEffect } from 'react';
import "../../style/MyPage/Mypage.scss";
import MypageRecent from './MypageRecent';
import MypagePlay from './MypagePlay';
import MypageMenu from './MypageMenu';
import MypageMenu2 from './MypageMenu2';
import { isLoginState } from '../../recoil/JWT/JWTAtom';
import { useRecoilState } from 'recoil';
import { decodeToken } from '../../hooks/JWT/JWTType';
import { JWTDecoding } from '../../apis/JWT/JWTDecoding';
import { getUserInfoApi } from '../../apis/MyPage/myPage';
import { myPage } from '../../hooks/MyPage/MyPageType';
import { userInfoAtom } from '../../recoil/MyPage/MyPageAtom';
import { tokensRefresh } from '../../apis/JWT/JWTConfig';
import { getMyPageFavoriteList } from '../../apis/MyPage/MyPageFavoriteListApi';

function MyPage() {

    const [isLogin, setIsLogin] = useRecoilState(isLoginState);
    const [userInfo, setUserInfo] = useRecoilState<myPage>(userInfoAtom);

    const tokenProfile = () => {
        if(isLogin) {
            return (JWTDecoding() as decodeToken);
        }
    }

    const profileImgae = tokenProfile()?.userProfile;
    const profileNick = tokenProfile()?.nickname;

    useEffect(() => {
        handleUserInfo();
    },[]);

    const handleUserInfo = async() =>{
        try {
            setUserInfo(await getUserInfoApi());
        } catch (error) {
            console.log(error);
        }
    }

    const test = () =>{
        tokensRefresh(localStorage.getItem('refreshToken'));
    }

    return (
        <div className='Mypage'>
            <div className='MypageUserInfo'>
                <div className='MypageUserProfile'>
                    <img src={`http://dopeboyzclub.ddns.net:7733/userprofile/${profileImgae}`} alt='profile' className='MypageUserProfileImg' />
                </div>
                <div className='MypageUserDetails'>
                    <div className='MypageUserNickName'>
                        <span>{profileNick}</span>
                    </div>
                    <div className='MypageUserEmail'>
                        <span>{userInfo?.email}</span>
                    </div>
                </div>
            </div>
            <div className='MypageRecentlyGoodSeul'>
                <div className='MypageRecentlyHeader'>
                    <span onClick={test}>최근 본 구슬님</span>
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