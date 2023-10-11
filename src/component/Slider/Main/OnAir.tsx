import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../../../style/main/onairSlider.scss"



export default function App() {
  return (
    <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={15}
        >
        <SwiperSlide className="onair_slide">
           ddd
        </SwiperSlide>
        <SwiperSlide className="onair_slide">
           ddd2
        </SwiperSlide>
        <SwiperSlide className="onair_slide">
           ddd2
        </SwiperSlide>
        <SwiperSlide className="onair_slide">
           ddd2
        </SwiperSlide>
        <SwiperSlide className="onair_slide">
           ddd2
        </SwiperSlide>
        
    </Swiper>
  );
}