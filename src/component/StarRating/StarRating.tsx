import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useRecoilState } from 'recoil';
import { starRatingState } from '../../recoil/StarRating/StarRatingAtom';


export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [realScore, setRealScore] = useRecoilState(starRatingState);
  

  const handleRatingChange = (event: React.ChangeEvent<{}>, changedVal: number | null) => {
    if (changedVal !== null) {
      setRating(changedVal);
      setRealScore(changedVal * 2);
      console.log(changedVal); // 변경된 값
      console.log(changedVal * 2); // 변경된 값에 대한 계산
    }
  };

  useEffect(() => {
    // 별점이 변경될 때마다 실행되는 코드
    console.log('Rating changed:', rating);
    console.log('Real score:', realScore);
  }, [rating, realScore]);

  return (
    <Stack spacing={1}>
      <Rating 
        defaultValue={0} 
        precision={0.5} 
        onChange={handleRatingChange}
        size='large'
      />
    </Stack>
  );
}
