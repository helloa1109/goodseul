import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "../../../style/main/purposeSlider.scss"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

// import required modules
import { EffectCards, Pagination } from 'swiper/modules';

export default function App() {
  
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        pagination={true}
        modules={[EffectCards, Pagination]}
        initialSlide={2}
        className='purpose_slider'
      >
        <SwiperSlide className='purpose_slide red'>
          Slide 1
        </SwiperSlide>
        <SwiperSlide className='purpose_slide blue'>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className='purpose_slide green'> 
          Slide 3
        </SwiperSlide>
        <SwiperSlide className='purpose_slide orange'>
          Slide 4
        </SwiperSlide>
        <SwiperSlide className='purpose_slide yellow'>
          Slide 5
        </SwiperSlide>
      </Swiper>
    </>
  );
}