import React from 'react'
import "../../style/LocationBased/LocationBasedList.scss";
import { useRecoilValue } from "recoil";
import { selectedRegionState } from "../../recoil/LocationBased/LocationAtom";

const LocationBasedList = () => {

    const selectedRegion = useRecoilValue(selectedRegionState);

    console.log(selectedRegion);

  return (
    <div className='LocationList'>
      
    </div>
  )
}

export default LocationBasedList
 