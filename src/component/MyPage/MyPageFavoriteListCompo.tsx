import React, {useEffect} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { MyPageFavoriteListState } from '../../recoil/MyPage/MyPageFavoriteListAtom'
import { getMyPageFavoriteList } from '../../apis/MyPage/MyPageFavoriteListApi';

const MyPageFavoriteListCompo = () => {

  const MyPageFavoriteListValue=useRecoilValue(MyPageFavoriteListState);
  const [MyFavoriteList,setMyFavoriteList]=useRecoilState(MyPageFavoriteListState);

  return (

    <div className='MyPageFavorite'>
      {MyPageFavoriteListValue.map((favoritelist,idx)=>
      <div key={idx}>

      </div>
      )}

    </div>
  )
}

export default MyPageFavoriteListCompo
