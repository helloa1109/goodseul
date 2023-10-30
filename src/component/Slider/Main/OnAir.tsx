import { Swiper, SwiperSlide } from "swiper/react";
import onair1 from "../../../image/Main/onair1.jpg";
import onair2 from "../../../image/Main/onair2.jpg";
import onair3 from "../../../image/Main/onair3.jpg";

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
            <img
               alt="pic"
               src={onair1}
               className="msonair_pic"
               />
            <div className="msonair_txtwrap">
               <div className="main_burgundy main_smalltxt">환영합니다!</div> 
               <div className="main_white main_vsmallheavytxt">여기서 실시간 상담이 가능한 구슬님들과 만나보실수 있어요.</div>
            </div>     
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="msonair_slide">
            <img
                  alt="pic"
                  src={onair2}
                  className="msonair_pic"
                  />
            <div className="msonair_txtwrap">
                  <div className="main_burgundy main_smalltxt">어렵지 않아요!</div> 
                  <div className="main_white main_vsmallheavytxt">현재 접속 중인 구슬님들과 연결해드려요.</div>
            </div>     
         </div>
        </SwiperSlide>
        <SwiperSlide >
         <div className="msonair_slide">
            <img
                  alt="pic"
                  src={onair3}
                  className="msonair_pic"
                  />
            <div className="msonair_txtwrap">
                  <div className="main_burgundy main_smalltxt">만나보세요!</div> 
                  <div className="main_white main_vsmallheavytxt">고객님을 기다리는 구슬님들이 많이 계세요!</div>
            </div>     
         </div>
        </SwiperSlide>   
       
    </Swiper>
  );
}