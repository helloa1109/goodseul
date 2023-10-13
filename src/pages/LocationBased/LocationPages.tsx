import React from 'react'
import LocationBased from '../../component/LocationBased/LocationBased'
import LocationBasedList from '../../component/LocationBased/LocationBasedList'
import "../../style/LocationBased/LocationBasedList.scss";

const LocationPages = () => {

  return (
    <div className='LocationBasedPages'>
      <LocationBased />
      <LocationBasedList/>
    </div>
  );
};

export default LocationPages
