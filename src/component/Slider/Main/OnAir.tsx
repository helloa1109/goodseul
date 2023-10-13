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
        <SwiperSlide >
         <div className="onair_slide">
            ddd1
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="onair_slide">
            ddd2
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="onair_slide">
            ddd3
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="onair_slide">
            ddd4
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="onair_slide">
            ddd5
         </div>
        </SwiperSlide>
        
        
    </Swiper>
  );
}