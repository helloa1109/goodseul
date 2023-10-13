
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../../style/main/locateSlider.scss";

import { EffectFade } from 'swiper/modules';

SwiperCore.use([Autoplay]);
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        modules={[EffectFade]}
        loop={true}
        speed={4000}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='locate_slide'>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className='locate_slide'>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='locate_slide'>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='locate_slide'>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
