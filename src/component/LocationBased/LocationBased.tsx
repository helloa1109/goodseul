import React, { useEffect, useState } from 'react';
import "../../style/LocationBased/LocationBased.scss";
import seoul from "../../image/LocationBased/region1.png";
import geongi from "../../image/LocationBased/region2.png";
import gangwondo from "../../image/LocationBased/region3.png";
import gwangju from "../../image/LocationBased/region4.png";
import { useRecoilState } from 'recoil';
import { selectedLocationState ,testList} from "../../recoil/LocationBased/LocationAtom";
import { getGoodSeulList } from '../../apis/LocationBasedList/LocationBasedListApi';
import { GoodSeullist } from "../../hooks/LocationBasedList/LocationBasedList";

const LocationBased = () => {
  const regionImages = [seoul, geongi, gangwondo, gwangju,gwangju];
  const regionTexts = ["서울", "경기","충청도","경상도","제주"];

  const [selectedLocation, setSelecteLocation] = useRecoilState(selectedLocationState);
  
  const [data, setData] = useState<GoodSeullist[]>([]); 
  const [List, setList] = useRecoilState(testList);

  const handleRegionClick = async (index: number) => {
    const selectedRegionName = regionTexts[index];
    setSelecteLocation(selectedRegionName);
    
    try {
      const response = await getGoodSeulList(selectedLocation);
      setList(response);
      setData(response);
      console.log("list",List);
      
      // console.log("try임",res.data);
      // console.log("location",data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log("list2",List);
  console.log("data임",data);

  useEffect(() => {
    if (selectedLocation) {
      getGoodSeulList(selectedLocation);
    }

  }, [selectedLocation]);


  return (
    <div className='LocationBased'>
      <div className='LocationBasedHeader'>
        <div className='LocationBasedregion'>
          {regionImages.map((imageUrl, index) => (
            <div className='RegionGroup' key={index} onClick={() => handleRegionClick(index)}>
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
