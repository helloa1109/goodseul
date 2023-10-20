import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating:number) => {
    setRating(selectedRating);
  };


  return (
    <div>
        <div>

        </div>
      
    </div>
  );
};

export default StarRating;
