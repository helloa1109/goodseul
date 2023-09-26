import React from 'react'
import "../../style/Request/Request2.scss";
import FirstInfo from "../../image/Request/first.png";
import SecondInfo from "../../image/Request/second.png";
const RequestUser2 = () => {
    return (
        <div className='RequestUser2'>
            <div className='RequestUser2Group'>
                <div className='RequestUser2Section'>
                    <div className='RequestUser2Section text1'>
                        사용자 맞춤 정보 입력
                    </div>
                    <div className='RequestUser2SmallGroup'>
                        <div>간단한 정보를 입력하면</div>
                        <div>구슬님이 확인하여 빠르게</div>
                        <div>상담 받을 수 있습니다.</div>
                    </div>
                    <div className='RequestUser2InfoImg'>
                        <img src={FirstInfo} alt='firstinfo' />
                    </div>
                </div>
                <div className='RequestUser2Section'>
                    <div className='RequestUser2Section text2'>
                        합리적인 가격
                    </div>
                    <div className='RequestUser2SmallGroup'>
                        <div>다양한 구슬님들과</div>
                        <div>대화하며 합리적인 가격에</div>
                        <div>상담을 진행해 보세요.</div>
                    </div>
                    <div className='RequestUser2InfoImg'>
                        <img src={SecondInfo} alt='secondinfo' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RequestUser2
