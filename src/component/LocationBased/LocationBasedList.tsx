import React, { useEffect } from 'react'
import "../../style/LocationBased/LocationBasedList.scss";
import { useRecoilValue } from "recoil";
import { selectedRegionState, testList } from "../../recoil/LocationBased/LocationAtom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
const LocationBasedList = () => {

    const selectedRegion = useRecoilValue(selectedRegionState);

    console.log(selectedRegion);

    const ListValue = useRecoilValue(testList);
  

    console.log("리스트 벨류에요",ListValue);



  return (
    <div className='LocationList'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        centeredSlides={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {ListValue.map((List,index) => (
        <SwiperSlide className='t' key={index}>
            <div className='a'>
              <p>{List.goodseulProfile}</p>
              <p>{List.skill}</p>
              <p>{List.career}</p>
              <p>{List.goodseulName}</p>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default LocationBasedList
 