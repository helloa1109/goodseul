import React, { useRef, useEffect, useState } from 'react'
import "../../style/Request/Request2.scss";
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import img1 from "../../image/Request/t1.png";
import img2 from "../../image/Request/t2.png";
import RequestInfo from './RequestInfo';

const RequestUser2 = () => {

    const textRef = useRef(null);
    const textRef2 = useRef(null);

    const [isImageClicked, setImageClicked] = useState(false);
    
    const handleImageClick = () => {
        setImageClicked(!isImageClicked);
    };


    return (
        <div className='RequestUser2'>
            <div className='RequestUser2Group'>
               <div className='RequestInfoGroup'>
                    <span>빠른 견적요청</span>
                    <span>견적요청에 대한 내용</span>
                    <span>들어가야되는데 흠 </span>
                    <p>견적요청 소개</p>
               </div>
                <RequestInfo/>
            </div>
        </div>
    )
}

export default RequestUser2
