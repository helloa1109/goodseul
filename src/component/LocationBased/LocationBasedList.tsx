import React from 'react'
import "../../style/LocationBased/LocationBasedList.scss";
import { useRecoilValue } from "recoil";
import { selectedRegionState, testList } from "../../recoil/LocationBased/LocationAtom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";
import { EffectCards } from 'swiper/modules';
import { Autoplay } from "swiper/modules";


import 'swiper/css';
import 'swiper/css/effect-cards';

SwiperCore.use([Autoplay]);
const LocationBasedList = () => {

  const selectedRegion = useRecoilValue(selectedRegionState);

  console.log(selectedRegion);

  const ListValue = useRecoilValue(testList);

  console.log("리스트 벨류에요", ListValue);


  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      // initialSlide={5}
      // threshold={100} //마우스 스와이프 민감도
      loop={true}
      // resistance={false}  // 슬라이드 터치 저항 여부
      slideToClickedSlide={true} // 해당 슬라이드 클릭 시 이동
      pagination={true}
      // initialSlide={5}
      // slidesPerView={1} //한 슬라이드에 보여줄 갯수
      // spaceBetween={200} //슬라이드간 거리
      freeMode={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      className="mySwiper"
    >
      {ListValue.map((List, index) => (
        <SwiperSlide key={index} className='GoodSeulList'>
          <div className='LocationGoodSeultList'>
            <img
              className='GoodSeulLocationImg'
              src={`http://dopeboyzclub.ddns.net:7733/images/${List.goodseulProfile}`} alt='' />
              <div className='GoodSeulLocationHeader'>
                <p>{List.goodseulName}<span> 구슬님</span></p>
                <p className='GoodSeulLocationReviewCount'>4.5</p>
              </div>
              <div className='GoodSeulLocationCenterContent'>
                <span>{List.skill}</span>
                <span>{List.skill}</span>
                <span>{List.skill}</span>
              </div>
              <div className='GoodSeulLocationFooter'>
                <span>여러분의 성공을 위해 최선을 다하겠습니다.</span>  
              </div>            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


export default LocationBasedList
