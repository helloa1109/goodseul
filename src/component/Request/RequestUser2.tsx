import React, { useRef, useEffect } from 'react'
import "../../style/Request/Request2.scss";
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const RequestUser2 = () => {

    const textRef = useRef(null);
    const textRef2 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 70%',
                end: 'top 40%',
                scrub: 1,
            },
        });

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: textRef2.current,
                start: 'top 60%', // 시작위치임
                end: 'top 50%', // 끝나는 위치임
                scrub: 1,
            },
        });

        tl.fromTo(
            textRef.current,
            { opacity: 0, y: -100 , x: 0}, 
            { opacity: 1, y: 0, duration: 1, ease: 'power1.in' },
        );

        tl1.fromTo(
            textRef2.current,
            { opacity: 0, y: -100, x: 0 }, 
            { opacity: 1, y: 0, duration: 1, ease: 'power1.in' }, 
        );

    }, []);
    return (
        <div className='RequestUser2'>
            <div className='RequestUser2Group'>
                <div className='info1'>
                    <div className='info1Text' ref={textRef}>
                        <span>견적요청 단 일주일</span>
                        <p>기다리지 마세요</p>
                        <p>1주일이면 해결됩니다</p>
                    </div>
                </div>

                <div className='info2' >
                    <div className='info2Text'>
                        <span>나를 위한 프리미엄 구슬</span>
                        <p>프리미엄 구슬님</p>
                        <p>믿고 상담받으세요</p>
                    </div>
                </div>

                <div className='info3'>
                    <div className='info3Text'>
                        <span>나를 위한 프리미엄 구슬</span>
                        <p>프리미엄 구슬님</p>
                        <p>믿고 상담받으세요</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RequestUser2
