import React, { useEffect } from 'react'
import "../../style/LocationBased/LocationBasedList.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedRegionState, testList } from "../../recoil/LocationBased/LocationAtom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";
import { EffectCards , Pagination} from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import defaultImg from "../../image/GuseulDetail/GuseulDetailImg01.jpg";


import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { GoodSeulIdxAtom } from '../../recoil/GoodSeul/GoodSeulAtom';
import { useNavigate } from 'react-router-dom';

SwiperCore.use([Autoplay]);
const LocationBasedList = () => {
  const navigate = useNavigate();
  const selectedRegion = useRecoilValue(selectedRegionState);

  console.log(selectedRegion);

  const ListValue = useRecoilValue(testList);
  const [GoodSeulIdx, setGoodSeulIdx] = useRecoilState(GoodSeulIdxAtom);
  const idx = ListValue.map(item => item.idx);
  console.log("리스트 벨류에요", ListValue);
  
  const handleGoodSeulIdx = (clickedIndex:number) => {
    if (ListValue.length > 0) {
      const idx = ListValue[clickedIndex].idx;
      setGoodSeulIdx(idx);
      console.log("idx",GoodSeulIdx);
      navigate("/GuseulDetail");
    }
  }

  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Pagination]}
      // initialSlide={5}
      // threshold={100} //마우스 스와이프 민감도
      loop={true}
      // resistance={false}  // 슬라이드 터치 저항 여부
      slideToClickedSlide={true} // 해당 슬라이드 클릭 시 이동
      pagination={true}
      // initialSlide={5}
      // slidesPerView={1} //한 슬라이드에 보여줄 갯수
      // spaceBetween={200} //슬라이드간 거리
      freeMode={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="mySwiper"
    >
      {ListValue.map((List, index) => (
        <SwiperSlide key={index} className='GoodSeulList' onClick={() => handleGoodSeulIdx(index)}>
          <div className='LocationGoodSeultList'>
            <img
              className={`GoodSeulLocationImg ${List.goodseulProfile ? '' : 'default-img'}`}
              src={List.goodseulProfile ? `http://dopeboyzclub.ddns.net:7733/images/${List.goodseulProfile}` : defaultImg}
              alt=''
            />

            <div className='GoodSeulLocationHeader'>
              <p>{List.goodseulName}<span> 구슬님</span></p>
              <p className='GoodSeulLocationReviewCount'>4.5</p>
            </div>
            <div className='GoodSeulLocationCenterContent'>
              {List.skill && List.skill.split(',')[0] && <span>{List.skill.split(',')[0]}</span>}
              {List.skill && List.skill.split(',')[1] && <span>{List.skill.split(',')[1]}</span>}
              {List.skill && List.skill.split(',')[2] && <span>{List.skill.split(',')[2]}</span>}
            </div>
            <div className='GoodSeulLocationFooter'>
              <span>여러분의 성공을 위해 최선을 다하겠습니다.</span>
            </div>
          </div>
          
        </SwiperSlide>
        
      ))}
    </Swiper>
  )
}


export default LocationBasedList
