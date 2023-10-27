import React,{useEffect} from 'react'
import MyPageFavoriteListCompo from '../../component/MyPage/MyPageFavoriteListCompo'
import { getMyPageFavoriteList } from '../../apis/MyPage/MyPageFavoriteListApi';

const MyPageFavorite = () => {
  return (
    <div>
        <MyPageFavoriteListCompo/>
    </div>
  )
}

export default MyPageFavorite