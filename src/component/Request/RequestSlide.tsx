import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../style/Request/RequestSlide.scss";
import "../../style/LocationBased/LocationBased.scss"
import geongi from "../../image/LocationBased/testimg.jpg";
import arrow from "../../image/Request/arrow-right.png";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from 'recoil';
import { selectedRegionState } from "../../recoil/LocationBased/LocationAtom";

import { AxiosResponse } from "axios";

import { ReviewListApi } from "../../apis/Request/RequestApi";
import { Review, ReviewListResponse } from "../../hooks/Request/RequestType";

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
        // API 호출
        ReviewListApi()
            .then((response: AxiosResponse<ReviewListResponse>) => {
                console.log(response.data);
                setReviews(response.data.reviews);
            })
            .catch((error: any) => {
                console.error("Error fetching review list:", error);
            });
    }, []);

    console.log(reviews);


    return (
        <Swiper
            centeredSlides={true} //가운데 정렬
            slidesPerView={1} //한 슬라이드에 보여줄 갯수
            spaceBetween={100} //슬라이드간 거리
            // loop={true} //슬라이드 반복 여부
            // autoplay={{ delay: 1000, disableOnInteraction: true }} //자동 슬라이드 시간
            freeMode={true}
        >

            {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                    <div className='SlideMap' onClick={() => handleRegionClick(index)}>
                        <img className='SlideImg' src='http://dopeboyzclub.ddns.net:7733/project/images/"Oh"/c46719a6-4062-46d9-95c0-5d782c862123' />
                        <div className='SlideMapText'>
                            <div className='SlideMapHeader'>
                                <div className='SlideName'>
                                    <p>{review.goodseulName}</p><span>구슬님</span>
                                </div>
                                <div className='SlideTagBox'>
                                    <span className='SlideTagText'>{review.skill}</span>
                                    <span className='SlideTagText'>{review.rtype}</span>
                                    <span className='SlideTagText'>{review.skill}</span>
                                </div>
                            </div>
                            <div className='SlideReviewGroup'>
                                <div className='SlideReviewCount'>
                                    <span>{review.rcontent}{review.rcontent}{review.rcontent}{review.rcontent}{review.rcontent}</span>
                                    {/* <img src={arrow} alt='arrow' className='SlideArrow' /> */}
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
