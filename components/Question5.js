import React, { useState } from 'react';

function Question5() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isDisabled}>
        Click me!
      </button>
    </div>
  );
}

export default Question5;