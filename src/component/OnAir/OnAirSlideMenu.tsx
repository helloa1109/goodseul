import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../style/OnAir/OnAirSlideMenu.scss";

const OnAirSlideData = [
  '신동휘 구슬님',
  '이상혁 구슬님',
  '유찬민 구슬님',
  '김동규 구슬님',
  '최용주 구슬님',
  '조경철 구슬님'
];

const OnAirSlideMenu = () => {
  return (
    <div className='OnAirSlideMenuComponent'>
      <Swiper spaceBetween={0} slidesPerView={4}>
        {OnAirSlideData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className='OnAirProfilePhoto'>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="#D9D9D9" />
              </svg>
              <span>{data}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OnAirSlideMenu;
