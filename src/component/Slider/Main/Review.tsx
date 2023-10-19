import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
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
                       <div className="msreview_slide" key={idx}>
                            <div className="msreview_profile main_vsmalltxt"><img className="msreview_pic" alt="pic" src={imgurl + `${item.uprofile}`}/>{item.goodseulName}</div>
                            <div className="msreview_bot">
                              <div className="msreview_subject main_smalltxt">{item.rsubject}</div>
                              <div className="msreview_content main_vmsmalltxt">{item.rcontent}</div>
                            </div>
                        </div>
                    </SwiperSlide>
 
                ))
                   }
       
    </Swiper>
  );
}