import React from 'react'
import "../../style/Request/RequestUser3.scss";
import arrow from "../../image/Request/chevron.left.png";
import { useNavigate} from "react-router-dom";
import Slide from "../../component/Request/RequestSlide";
const RequestUser3 = () => {

    const navigate = useNavigate();

    const handleReview = () => {
        navigate("/Review");
    }
    return (
        <div className='RequestUser3'>
            <div className='RequestUser3Header'>
                <div className='RequestUser3Title'>
                    <div>실시간 후기</div>
                </div>

                <div className='RequestUser3Middle'>
                    <div>1억개 이상 +</div>
                    <div>실제 사용자 리뷰</div>
                </div>

                <div className='RequestUser3More' onClick={handleReview}>
                    더 알아보기<img src={arrow} alt='arrow' className='RequestUser3MoreImg'/>
                </div>
            </div>
            <Slide/>
        </div>
    )
}

export default RequestUser3
