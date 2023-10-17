import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../style/OnAir/OnAirSlideCard.scss';
import OnAirProfileImg1 from '../../image/OnAir/onair1.jpg';
import OnAirProfileImg2 from '../../image/OnAir/onair2.jpg';
import OnAirProfileImg3 from '../../image/OnAir/onair3.jpg';
import OnAirProfileImg4 from '../../image/OnAir/onair4.jpg';

const OnAirProfileImages = [OnAirProfileImg1, OnAirProfileImg2, OnAirProfileImg3, OnAirProfileImg4];


const slideData = [
  {
    name: '이상혁',
    location: '경기도',
    skill: '성공기원',
    state: '실시간',
    info: '경기도 평택시 프리미엄 구슬님',
  },
  {
    name: '신동휘',
    location: '서울',
    skill: '취업기원',
    state: '오프라인',
    info: '서울시 개봉동 프리미엄 구슬님',
  },
  {
    name: '유찬민',
    location: '경기도',
    skill: '승진기원',
    state: '실시간',
    info: '경기도 부천시 프리미엄 구슬님',
  },
  {
    name: '김동규',
    location: '경기도',
    skill: '액운',
    state: '실시간',
    info: '경기도 성남시 프리미엄 구슬님',
  },
];

const OnAirSlideCard = () => {
  return (
    <div className='OnAirSlideCardPage'>
      <div className='OnAirSlideCardSection'>
        <Swiper spaceBetween={40} slidesPerView={2} loop={true}>
          {slideData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className='OnAirSlideCardPoint'>
                <img src={OnAirProfileImages[index]} alt='OnAir Profile' className='OnAirProfileImage' />
                <div className='OnAirSlideCardBottom'>
                  <span className='OnAirSlideCardName'>{data.name} 구슬님</span>
                  <span className='OnAirSlideCardInfo'>{data.info}</span>
                  <div className='GuseulDetailTag'>
                    <p className='GuseulDetailLocal'>{data.location}</p>
                    <p className='GuseulDetailSkill'>{data.skill}</p>
                    <p className='GuseulDetailState'>{data.state}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OnAirSlideCard;
