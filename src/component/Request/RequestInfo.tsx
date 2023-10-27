import React, { useState } from 'react';
import img1 from '../../image/Request/t1.png';
import img2 from '../../image/Request/t2.png';
import '../../style/Request/RequestInfo.scss';
import FallDownText from './FallDownText';

const RequestInfo = () => {
    const [isImageClicked, setImageClicked] = useState(false);
    const [isImageClicked2, setImageClicked2] = useState(false);
    const [isImageClicked3, setImageClicked3] = useState(false);

    const handleImageClick = () => {
        setImageClicked(!isImageClicked);
        setImageClicked2(false);
        setImageClicked3(false);
    };

    const handleImageCLick2 = () => {
        setImageClicked(false);
        setImageClicked2(!isImageClicked2);
        setImageClicked3(false);
    };

    const handleImageCLick3 = () => {
        setImageClicked(false);
        setImageClicked2(false);
        setImageClicked3(!isImageClicked3);
    };

    return (
        <div className='RequestInfoImgGroup'>
             <FallDownText isImageClicked3={isImageClicked3} /> 
            <div className={`RequestInfoImg2Group ${isImageClicked3 ? 'hidden3' : ''}`}>
                <img
                    src={img2}
                    alt=''
                    className={`RequestInfoImg2 ${isImageClicked2 ? 'clicked' : ''}`}
                    onClick={handleImageCLick2}
                />
                {isImageClicked2 ? <span className='isImageText2'>1주일안에 되거든여</span> : null}
            </div>

            <div className={`RequestInfoImg1Group ${isImageClicked3 ? 'hidden3' : ''}`}>
                <img
                    src={img1}
                    alt=''
                    className={`RequestInfoImg1 ${isImageClicked ? 'clicked' : ''}`}
                    onClick={handleImageClick}
                />
                {isImageClicked ? <span className='isImageText'>견적요청을 왜 사용 하는지..</span> : null}
            </div>

            <div className='RequestInfoImg3Group'>
                <img
                    src={img1}
                    alt=''
                    className='RequestInfoImg3'
                    onClick={handleImageCLick3}
                />
            </div>

           
        </div>
    );
};

export default RequestInfo;
