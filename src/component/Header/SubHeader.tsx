import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../../style/header/SubHeader.scss";
import arrow from "../../image/header/control.png";

const SubHeader = () => {

    const navigate = useNavigate();

    return (
        <div className='SubHeaderMain'>
            <div className='SubHeaderLeftSection' onClick={()=> navigate(-1)}>
                <img src={arrow} alt='arrow' className='SubHeaderArrowIcon'/>
            </div>
            <div className='SubHeaderMiddleSection'>
                <div className='SubHeaderText'>서브헤더</div>
            </div>
        </div>
    )
}

export default SubHeader


