import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "../../../style/main/reviewSlider.scss"
import "swiper/css"
import { useEffect, useState } from "react";
import { reviewPList } from "../../../apis/Review/ReviewPremium";
import { ReviewCData } from "../../../hooks/Review/Review";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);
export default function App() {


    const [PRList, SetPRList] = useState<ReviewCData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await reviewPList();
            
            if (res.data) {
              SetPRList(res.data);
            } else {
              console.error("Data is undefined");
            }
          } catch (error) {
            console.error("Error", error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <Swiper 
        loop={true}
        slidesPerView={2}
        spaceBetween={5}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        >
            {
                PRList.map((item, idx)=>(
                    <SwiperSlide>
                       <div className="review_slide" key={idx}>
                            {item.goodseulName}
                        </div>
                    </SwiperSlide>
 
                ))
                   }
       
    </Swiper>
  );
}