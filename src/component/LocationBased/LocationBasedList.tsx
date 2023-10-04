import React from 'react'
import "../../style/LocationBased/LocationBasedList.scss";
import { useRecoilValue } from "recoil";
import { selectedRegionState } from "../../recoil/LocationBased/LocationAtom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
const LocationBasedList = () => {

    const selectedRegion = useRecoilValue(selectedRegionState);

    console.log(selectedRegion);

  return (
    <div className='LocationList'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        centeredSlides={true} //가운데 정렬
        modules={[EffectCards]}
        className="mySwiper"
      >
        <div className='ss'>
        <SwiperSlide className='t'>Slide 1</SwiperSlide>
        <SwiperSlide className='t'>Slide 2</SwiperSlide>
        <SwiperSlide className='t'>Slide 3</SwiperSlide>
        <SwiperSlide className='t'>Slide 4</SwiperSlide>
        <SwiperSlide className='t'>Slide 5</SwiperSlide>
        <SwiperSlide className='t'>Slide 6</SwiperSlide>
        <SwiperSlide className='t'>Slide 7</SwiperSlide>
        <SwiperSlide className='t'>Slide 8</SwiperSlide>
        <SwiperSlide className='t'>Slide 9</SwiperSlide>
        </div>
      </Swiper>
    </div>
  )
}

export default LocationBasedList
 