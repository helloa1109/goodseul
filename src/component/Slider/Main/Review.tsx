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
    const imgurl = 'http://dopeboyzclub.ddns.net:7733/userprofile/';

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
        speed={2000}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        >
            {
                PRList.map((item, idx)=>(
                    <SwiperSlide>
                       <div className="review_slide" key={idx}>
                            <img className="review_profile" alt="pic" src={imgurl + `${item.uprofile}`}/>
                            <div className="review_name">{item.goodseulName}</div>
                            <div className="review_content">{item.rcontent}</div>
                        </div>
                    </SwiperSlide>
 
                ))
                   }
       
    </Swiper>
  );
}