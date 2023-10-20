import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-creative';

import { EffectCreative } from 'swiper/modules';

export default function App() {
  return (
    <Swiper
      grabCursor={true}
      effect={'creative'}
      creativeEffect={{
         prev: {
         shadow: true,
         translate: [0, 0, -400],
         },
         next: {
         translate: ['100%', 0, 0],
         },
      }}
      modules={[EffectCreative]}
        >
        <SwiperSlide >
         <div className="msonair_slide">
            ddd1
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="msonair_slide">
            ddd2
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="msonair_slide">
            ddd3
         </div>
        </SwiperSlide>   
        <SwiperSlide >
         <div className="msonair_slide">
            ddd4
         </div>
        </SwiperSlide>   
    </Swiper>
  );
}