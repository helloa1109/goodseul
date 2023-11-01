import React, {useEffect} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { MyPageFavoriteListState } from '../../recoil/MyPage/MyPageFavoriteListAtom'
import { getMyPageFavoriteList } from '../../apis/MyPage/MyPageFavoriteListApi';
import "../../style/MyPage/MyPageFavoriteList.scss";

const MyPageFavoriteListCompo = () => {

  const MyPageFavoriteListValue=useRecoilValue(MyPageFavoriteListState);
  const [MyFavoriteList,setMyFavoriteList]=useRecoilState(MyPageFavoriteListState);

  return (

    <div className='MyPageFavorite'>
      {MyPageFavoriteListValue.map((favoritelist,idx)=>
      <div key={idx} className='WhiteBox'>
        <div className='WhiteBoxTop'>
          <div className='TopPhotoBox'>
            <img className='PhotoImg' src={`http://dopeboyzclub.ddns.net:7733/userprofile/${favoritelist.profile}`} alt='사진'/>
          </div>
        </div>

        <div className='WhiteBoxBottom'>
          <div className='BottomTextBoxWhole'>
            <div className='TextBox'>
              <div className='TextBoxTop'>
                <div className='TextBoxTopLeft'>
                  {favoritelist.g_name} 구슬님
                </div>

                <div className='TextBoxTopRight'>
                  하트 {favoritelist.favoriteCount}개
                </div>
              </div>

              <div className='TextBoxBottom'>
                <div className='TextBoxBottomLeft'>
                  3,000,000원
                 </div>

                <div className='TextBoxBottomRight'>
                  후기 188개
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      )}

    </div>
  )
}

export default MyPageFavoriteListCompo
