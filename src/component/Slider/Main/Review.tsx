import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css"
import { useEffect, useState } from "react";
import { reviewPList } from "../../../apis/Review/ReviewPremium";
import { ReviewCData } from "../../../hooks/Review/Review";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

SwiperCore.use([Autoplay]);
export default function App() {


    const [PRList, SetPRList] = useState<ReviewCData[]>([]);
    const imgurl = 'http://dopeboyzclub.ddns.net:7733/userprofile/';
    const navi = useNavigate();

    const headingReview =()=>{
      navi("/Review");
    }

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
                       <div className="msreview_slide" key={idx} onClick={headingReview}>
                            <div className="msreview_top">
                              <div className="msreview_profile">
                                <img 
                                  className="msreview_pic" 
                                  alt="pic" 
                                  src={item.uprofile === 'NoImage'? `${imgurl}noImage.jpg` : `${imgurl}${item.uprofile}`} 
                                />
                                <div className="msreview_name main_vsmalltxt">{item.goodseulName}</div>
                              </div>
                            </div>
                            <div className="msreview_bot">
                              <div className="msreview_subject main_smalltxt">
                                {item.rsubject}
                              </div>
                              <div className="msreview_content main_vmsmalltxt">
                                {item.rcontent}
                              </div>
                             
                            </div>
                         
                        </div>
                    </SwiperSlide>
 
                ))
                   }
       
    </Swiper>
  );
}