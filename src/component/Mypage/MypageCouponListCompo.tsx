import React, {useEffect} from 'react'
import { getMypageCouponList } from '../../apis/MyPage/MyPageCouponListApi';
import "../../style/MyPage/MyPageCouponList.scss";
import { useRecoilState, useRecoilValue } from 'recoil';
import { MyPageCouponListState } from '../../recoil/MyPage/MyPageCouponListAtom';

const MypageCouponListCompo = () => {

  const MyPageCouponListValue = useRecoilValue(MyPageCouponListState);
  const [MyCouponList,setMyCouponList]= useRecoilState(MyPageCouponListState);

  console.log("쿠폰value",MyPageCouponListValue);

    useEffect (()=>{
      const fetchData = async () => {
        try {
          const res = await getMypageCouponList();
          if(res){
            setMyCouponList(res.data.buyable_coupons);
          }

          console.log("콘솔로그res",res);
        } catch (error){
          console.error("쿠폰에러",error);
        }
      }; fetchData();
    },[setMyCouponList]);

  return (
    <div className='MyPageCoupon'>
      {MyPageCouponListValue.map((couponlist,idx)=>
        <div key={idx} className='MyPageCouponSectionBox'>
          <div className='CouponImgbox'>
            <img className='couponimg' src={`http://dopeboyzclub.ddns.net:7733/images/${couponlist.image}`} alt='쿠폰' />
          </div>

          <div className='CouponDescriptbox'>
          {couponlist.cpDescription}
          </div>

          <div className='CouponDatebox'>
            {couponlist.endDate? `${couponlist.startDate} ~ ${couponlist.endDate}`:`${couponlist.startDate} ~ 사용 시까지`}
          </div>

        </div>
      )}
        
    </div>
  )
}

export default MypageCouponListCompo