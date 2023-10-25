import React from 'react';
import "../../style/OnAir/OnAir.scss";
import OnAirSlideCard from '../../component/OnAir/OnAirSlideCard';
import OnAirSlideMenu from '../../component/OnAir/OnAirSlideMenu';
import OnAirSlideTitle from '../../component/OnAir/OnAirSlideTitle';

const OnAir = () => {
  return (
    <div className='OnAirPage'>
      <h2 className='OnAirTitle'>
        실시간 상담 구슬님
      </h2>
      <OnAirSlideTitle/>
      {/* <OnAirSlideCard/> */}
      <h2 className='OnAirSubTitle'>
        나를 위한 구슬님
      </h2>
      <OnAirSlideMenu/>
    </div>
  );
}

export default OnAir;
