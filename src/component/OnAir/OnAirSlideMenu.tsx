import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../style/OnAir/OnAirSlideMenu.scss";
import { useRecoilState, useRecoilValue } from 'recoil';
import { OnAirSlideMenuState } from "../../recoil/OnAir/OnAirSlideMenuRecoil";
import { getOnAirSlideMenuList } from "../../apis/OnAir/OnAirSlideMenuApis";


const OnAirSlideMenu = () => {

  const OnAirSlideMenuValue = useRecoilValue(OnAirSlideMenuState);
  const [OnAirSlideMenuList,setOnAirSlideMenuList] = useRecoilState(OnAirSlideMenuState);
  

  console.log("나를 위한 구슬",OnAirSlideMenuValue);

  useEffect (()=>{
    const OnAirSlideData = async () => {
      try {
        const res = await getOnAirSlideMenuList();
        if(res){
          setOnAirSlideMenuList(res.data);
        }

        console.log("나를 위한 구슬",res);

      } catch (error) {
        console.error("slideMenu에러",error);
      };
    }; OnAirSlideData();
  },[])

  return (
    <div className='OnAirSlideMenuComponent'>
      <Swiper spaceBetween={0} slidesPerView={4}>
        {OnAirSlideMenuList.map((data, index) => (
          <SwiperSlide key={index}>
            <div className='OnAirProfilePhoto'>
            <img src={`http://dopeboyzclub.ddns.net:7733/userprofile/${data.userProfile}`} alt={data.userProfile} />
              <span>{data.goodseulName}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OnAirSlideMenu;
