import React, { useState } from 'react';

function HideElement() {
  const [isVisible, setIsVisible] = useState(true);

  const handleHideClick = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && <p>This element will be hidden when the button is clicked</p>}
      <button onClick={handleHideClick}>Hide element</button>
    </div>
  );
}

export default Question7;