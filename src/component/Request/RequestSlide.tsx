import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../style/Request/RequestSlide.scss";
import "../../style/LocationBased/LocationBased.scss"
import { useNavigate } from "react-router-dom";

import { useRecoilState } from 'recoil';
import { selectedRegionState } from "../../recoil/LocationBased/LocationAtom";

import { ReviewListApi } from "../../apis/Request/RequestApi";
import { Review } from "../../hooks/Request/RequestType";

import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import 'swiper/css/effect-cards';
import { EffectCards} from 'swiper/modules';



SwiperCore.use([Autoplay]);
const RequestSlide = () => {

    const navigate = useNavigate();

    const handleReview = () => {
        navigate("/Review");
    }

    const [selectedRegion, setSelectedRegion] = useRecoilState(selectedRegionState);

    const handleRegionClick = (index: number) => {
        setSelectedRegion(index);
    };

    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ReviewListApi();
                setReviews(response.data);
            } catch (error) {
                console.error("error", error);
            }
        };
        fetchData();
    }, []);

    const defaultImg = 'http://dopeboyzclub.ddns.net:7733/userprofile/noImage.jpg';

    return (
        <Swiper
            effect={'cards'}
            modules={[EffectCards]}
            centeredSlides={true} //가운데 정렬
            // slidesPerView={1} //한 슬라이드에 보여줄 갯수
            // spaceBetween={500} //슬라이드간 거리
            freeMode={true}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
            {reviews.map((review, index) => (
                <SwiperSlide key={index} className='RequestSlide'>
                    <div className='SlideMap' onClick={() => handleRegionClick(index)}>
                        <img
                            className='SlideImg' alt='' 
                            src={review.uprofile === 'NoImage' ? defaultImg : `http://dopeboyzclub.ddns.net:7733/userprofile/${review.uprofile}`}/>
                        <div className='SlideMapText'>
                            <div className='SlideMapHeader'>
                                <div className='SlideName'>
                                    <p>{review.goodseulName}</p><span>구슬님</span>
                                </div>
                                <div className='SlideTagBox'>
                                    <span className='SlideTagText'>{review.skill}</span>
                                    <span className='SlideTagText'>{review.rtype}</span>
                                </div>
                            </div>
                            <div className='SlideReviewGroup'>
                                <div className='SlideReviewCount'>
                                    <span>{review.randSubject.split(',')[0]}</span>
                                    <span>{review.randSubject.split(',')[1]}</span>
                                    <span>{review.randSubject.split(',')[2]}</span>
                                    <span>{review.randSubject.split(',')[3]}</span>
                                    <span>{review.randSubject.split(',')[4]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            ))}
        </Swiper>
    );
}

export default RequestSlide;
