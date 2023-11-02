import React, {useEffect, useState} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { MyPageFavoriteListState } from '../../recoil/MyPage/MyPageFavoriteListAtom'
import { delMyPageFavorite, getMyPageFavoriteList } from '../../apis/MyPage/MyPageFavoriteListApi';
import "../../style/MyPage/MyPageFavoriteList.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';


const MyPageFavoriteListCompo = () => {

  const MyPageFavoriteListValue=useRecoilValue(MyPageFavoriteListState);
  const [MyFavoriteList,setMyFavoriteList]=useRecoilState(MyPageFavoriteListState);
  const [gidx,setGidx]=useState(0);

  const delefavorite= async () =>{
    delMyPageFavorite(gidx)
  }

  const delOnclick = async (gIdx:number) => {
    alert("삭제하시겠습니까?");
    try {
      const response: any = await delMyPageFavorite(gIdx);
      alert("삭제되었습니다");
      
    } catch (error) {
      console.error("삭제 중 오류가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    console.log(MyFavoriteList); // 상태 업데이트 여부 확인
  }, [MyFavoriteList]);


  return (

    <div className='MyPageFavorite'>
      {MyPageFavoriteListValue.map((favoritelist,idx)=>
      <div key={idx} className='WhiteBox'>
        <div className='WhiteBoxTop'>
          <div className='TopPhotoBox'>
            <img className='PhotoImg' src={`http://dopeboyzclub.ddns.net:7733/userprofile/${favoritelist.profile}`} alt='사진'/>
            <FontAwesomeIcon className='heartminus' icon={faHeartCircleMinus} onClick={(e) => {delOnclick(favoritelist.g_idx)}}/>
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
                <FontAwesomeIcon className='Favoriteheart' icon={faHeart} /> {favoritelist.favoriteCount}개
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
