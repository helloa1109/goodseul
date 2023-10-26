import React from 'react';
import "../../style/Request/FallDown.scss";
const FallDownText = ({ isImageClicked3 }: { isImageClicked3: boolean }) => {
    return (
        <div>
            {
                isImageClicked3 ? 
                <div className='isOpen3'>
                    <div className='falldown'>떨</div>
                    <div className='falldown'>어</div>
                    <div className='falldown'>지</div>
                    <div className='falldown'>는</div>
                    <div className='falldown'>텍</div>
                    <div className='falldown'>스</div>
                    <div className='falldown'>트</div>
                    <div className='falldown'>!</div>
                    <div className='falldown'>떨</div>
                    <div className='falldown'>어</div>
                    <div className='falldown'>지</div>
                    <div className='falldown'>는</div>
                    <div className='falldown'>텍</div>
                    <div className='falldown'>스</div>
                    <div className='falldown'>트</div>
                    <div className='falldown'>!</div>
                    <div className='falldown'>떨</div>
                    <div className='falldown'>어</div>
                    <div className='falldown'>지</div>
                    <div className='falldown'>는</div>
                    <div className='falldown'>텍</div>
                    <div className='falldown'>스</div>
                    <div className='falldown'>트</div>
                    <div className='falldown'>!</div>
                    
                </div> : null
            }
        </div>
    );
}

export default FallDownText;
