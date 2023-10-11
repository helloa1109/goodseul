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
                console.log("오냐?", response.data);
                setReviews(response.data);
            } catch (error) {
                console.error("오지마", error);
            }
        };
        fetchData();
    }, []);

    console.log("dd", reviews);


    return (
        <Swiper
            centeredSlides={true} //가운데 정렬
            slidesPerView={1} //한 슬라이드에 보여줄 갯수
            // spaceBetween={80} //슬라이드간 거리
            freeMode={true}
        >
            {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                    <div className='SlideMap' onClick={() => handleRegionClick(index)}>
                        <img
                            className='SlideImg'
                            src={`http://dopeboyzclub.ddns.net:7733/images/${review.goodseulProfile}`} alt='' />
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
