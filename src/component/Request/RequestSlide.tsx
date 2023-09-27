import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../style/Request/RequestSlide.scss";
import "../../style/LocationBased/LocationBased.scss"
import geongi from "../../image/LocationBased/testimg.jpg";
import arrow from "../../image/Request/arrow-right.png";
import { useNavigate } from "react-router-dom";

import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedRegionState } from "../../recoil/LocationBased/LocationAtom";
import { CategoryArrayValue, OnLoginValue } from '../../recoil/Request/RequsetAtom';

const RequestSlide = () => {

    const regionImages = [geongi, geongi, geongi, geongi, geongi];
    const regionTexts = ["조경철", "신동휘", "이상혁", "경상도", "제주"];
    const SlideReviewText = ["1700", "1400", "100", "54", "6"];

    const CategoryValue = useRecoilValue(CategoryArrayValue);
    const onLoginValue = useRecoilValue(OnLoginValue);

    const navigate = useNavigate();

    const handleReview = () => {
        navigate("/Review");
    }

    const [selectedRegion, setSelectedRegion] = useRecoilState(selectedRegionState);

    const handleRegionClick = (index: number) => {
        setSelectedRegion(index);
    };



    return (
        <Swiper
            centeredSlides={true} //가운데 정렬
            slidesPerView={5} //한 슬라이드에 보여줄 갯수
            spaceBetween={200} //슬라이드간 거리
            loop={true} //슬라이드 반복 여부
            autoplay={{ delay: 1000, disableOnInteraction: true }} //자동 슬라이드 시간
            freeMode={true}
        >

            {regionImages.map((imageUrl, index) => (
                <SwiperSlide>
                    <div className='SlideMap' key={index} onClick={() => handleRegionClick(index)}>
                        <img src={imageUrl} alt={`Region ${index + 1}`} className='SlideImg' />
                        <div className='SlideMapText'>
                            <div className='SlideMapHeader'>
                                <div className='SlideName'>
                                    <p>{regionTexts[index]}</p><span>구슬님</span>
                                </div>
                                <div className='SlideReviewGroup'>
                                    <div className='SlideReviewCount' onClick={handleReview}>
                                        <span>후기 {SlideReviewText[index]}</span>
                                        <img src={arrow} alt='arrow' className='SlideArrow' />
                                    </div>
                                </div>
                            </div>
                            <div className='SlideTagBox'>
                                <span className='SlideTagText'>{CategoryValue[index]}</span>
                                <span className='SlideTagText'>{onLoginValue[index]}</span>
                                <span className='SlideTagText'>{onLoginValue[index]}</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    );
}

export default RequestSlide;
