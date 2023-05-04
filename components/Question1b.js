import React, { useState } from 'react';

function Question1b(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {props.title}
      </div>
      {isOpen && (
        <div className="accordion-content">{props.content}</div>
      )}
    </div>
  );
}

export default Question1b;