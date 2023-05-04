import React, { useState } from 'react';

const Question3 = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex + 1);
  };

  const handlePreviousClick = () => {
    setCurrentImageIndex(currentImageIndex - 1);
  };

  return (
    <div>
      <button onClick={handlePreviousClick} disabled={currentImageIndex === 0}>
        Previous
      </button>
      <img src={`/images/${images[currentImageIndex]}`} alt="slide" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      <button onClick={handleNextClick} disabled={currentImageIndex === images.length - 1}>
        Next
      </button>
    </div>
  );
};

export default Question3;





