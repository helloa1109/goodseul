import { Swiper, SwiperSlide } from "swiper/react";
import "../../../style/main/reviewSlider.scss"
import "swiper/css"


export default function App() {

  return (
    <Swiper 
        loop={true}
        slidesPerView={2}
        spaceBetween={5}
        >
        <SwiperSlide>
            <div className="review_slide">
                여기에 리뷰 넣기1
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review_slide">
                여기에 리뷰 넣기2
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review_slide">
                여기에 리뷰 넣기3
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review_slide">
                여기에 리뷰 넣기4
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review_slide">
                여기에 리뷰 넣기5
            </div>
        </SwiperSlide>
    </Swiper>
  );
}