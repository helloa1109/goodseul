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
          <div className='mspurpose_cover'>
            <div className='mspurpose_txt'> <span className='main_burgundy'>백년해로 </span>하시기를. </div>
          </div>
          <img src={purpose3} alt="pic" />
         
         
        </SwiperSlide>
        <SwiperSlide className='mspurpose_slide'>
          <div className='mspurpose_cover'>
          <div className='mspurpose_txt'> 당신의 <span className='main_burgundy'>건강</span>과 <span className='main_burgundy'>쾌차</span>를.</div>
          </div>
          <img src={purpose2} alt="pic" />
          
          
        </SwiperSlide>
        <SwiperSlide className='mspurpose_slide'>
          <div className='mspurpose_cover'>
            <div className='mspurpose_txt'> 삶의 <span className='main_burgundy'>안녕</span>과 <span className='main_burgundy'>행운</span>을.</div>
          </div>
          <img src={purpose1} alt="pic" />
          
          
        </SwiperSlide>
        
        <SwiperSlide className='mspurpose_slide'>
          <div className='mspurpose_cover'>
            <div className='mspurpose_txt'>떠나간 분들의 <span className='main_burgundy'>명복</span>을.</div>
          </div>
          <img src={purpose4} alt="pic" />
          
          
        </SwiperSlide>
        <SwiperSlide className='mspurpose_slide'>
          <div className='mspurpose_cover'>
            <div className='mspurpose_txt'>기다리던 값진 <span className='main_burgundy'>결실</span>을.</div>
          </div>
          <img src={purpose5} alt="pic" />
          
        </SwiperSlide>
      </Swiper>
    </>
  );
}