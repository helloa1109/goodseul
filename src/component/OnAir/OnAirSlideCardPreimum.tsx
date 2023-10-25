import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../style/OnAir/OnAirSlideCard.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { OnAirSlideMenuState } from "../../recoil/OnAir/OnAirSlideMenuRecoil";
import { getOnAirSlideMenuPremiumList } from "../../apis/OnAir/OnAirSlideMenuPremiumApis";

const OnAirSlideCardPreimum = () => {

  const OnAirSlideMenuValue = useRecoilValue(OnAirSlideMenuState);
  const [OnAirSlideMenuList,setOnAirSlideMenuList] = useRecoilState(OnAirSlideMenuState);

  console.log("프리미엄 리스트",OnAirSlideMenuValue);

  useEffect (()=>{
    const OnAirSlideData = async () => {
      try {
        const res = await getOnAirSlideMenuPremiumList();
        if(res){
          setOnAirSlideMenuList(res.data);
        }

        console.log("좋아요 구슬",res);

      } catch (error) {
        console.error("좋아요 구슬에러",error);
      };
    }; OnAirSlideData();
  },[])

  return (
    <div className='OnAirSlideCardPage'>
    <div className='OnAirSlideCardSection'>
      <Swiper spaceBetween={40} slidesPerView={2} loop={true}>
        {OnAirSlideMenuList.map((data, index) => (
          <SwiperSlide key={index}>
            <div className='OnAirSlideCardPoint'>
            <img src={`http://dopeboyzclub.ddns.net:7733/userprofile/${data.userProfile}`} alt="구슬님사진" className='OnAirProfileImage' />
              <div className='OnAirSlideCardBottom'>
                <span className='OnAirSlideCardName'>{data.goodseulName} 구슬님</span>
                <span className='OnAirSlideCardInfo'>{data.goodsuleInfo}</span>
                <div className='GuseulDetailTag'>
                  <p className='GuseulDetailLocal'>{data.location}</p>
                  <p className='GuseulDetailSkill'>{data.skill}</p>
                  <p className='GuseulDetailState'>실시간</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  )
}

export default OnAirSlideCardPreimum
