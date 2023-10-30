import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { EffectCards, Pagination } from 'swiper/modules';
import purpose1 from '../../../image/Main/monk.jpg';
import purpose2 from '../../../image/Main/health.jpg';
import purpose3 from '../../../image/Main/marriage.jpg';
import purpose4 from '../../../image/Main/flower.jpg';
import purpose5 from '../../../image/Main/success.jpg';

export default function App() {
  
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        pagination={true}
        modules={[EffectCards, Pagination]}
        initialSlide={2}
        className='mspurpose_slider'
      >
        <SwiperSlide className='mspurpose_slide'>
          <img src={purpose1} alt="pic" />
          
        </SwiperSlide>
        <SwiperSlide className='mspurpose_slide'>
          <img src={purpose2} alt="pic" />
        </SwiperSlide>
        <SwiperSlide className='mspurpose_slide'> 
          <img src={purpose3} alt="pic" />
        </SwiperSlide>
        <SwiperSlide className='mspurpose_slide'>
          <img src={purpose4} alt="pic" />
        </SwiperSlide>
        <SwiperSlide className='mspurpose_slide'>
          <img src={purpose5} alt="pic" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}