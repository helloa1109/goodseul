import React from 'react';
import "../../style/LocationBased/LocationBased.scss";
import seoul from "../../image/LocationBased/region1.png";
import geongi from "../../image/LocationBased/region2.png";
import gangwondo from "../../image/LocationBased/region3.png";
import gwangju from "../../image/LocationBased/region4.png";

const LocationBased = () => {
  const regionImages = [seoul, geongi, gangwondo, gwangju,gwangju];
  const regionTexts = ["서울", "경기","강원도","광주","어디냐"];

  return (
    <div className='LocationBased'>
      <div className='LocationBasedHeader'>
        <div className='LocationBasedregion'>
          {regionImages.map((imageUrl, index) => (
            <div className='RegionGroup' key={index}>
              <div className='RegionItem'>
                <div className='RegionPhoto'>
                  <img src={imageUrl} alt={`Region ${index + 1}`} />
                </div>
                <div className='RegionText'>{regionTexts[index]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationBased;
