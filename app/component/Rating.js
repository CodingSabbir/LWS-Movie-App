
import React from 'react';
import { FaStar } from "react-icons/fa";

const Rating = ({ value }) => {
  const stars = Array(value).fill(FaStar); 

  return (
    <div className="flex gap-2">
      {
        stars.map((index) => (
          <FaStar key={index} className="text-yellow-500" /> 
        ))
      }
    </div>
  );
};

export default Rating;
