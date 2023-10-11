import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../style/OnAir/OnAirSlideCard.scss';

const OnAirSlideCard = () => {
  return (
    <div className='OnAirSlideCardPage'>
      <div className='OnAirSlideCardSection'>
        <Swiper spaceBetween={0} slidesPerView={4}>
            <SwiperSlide>
                <div className='OnAirSlideCardPoint'>
                    <span>
                        이상혁 구슬님
                    </span>
                    <span>
                        경기도 평택시 프리미엄 구슬님
                    </span>
                    <div>
                        <p>경기도</p>
                        <p>취업/성공</p>
                        <p>실시간</p>
                    </div>
                </div>
            </SwiperSlide>
            

        </Swiper>
      </div>
    </div>
  )
}

export default OnAirSlideCard
