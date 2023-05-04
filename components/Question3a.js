import React, { useState } from 'react';

const Question3a = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h2>Chest</h2>
      <ul>
        <li>
          <input type="checkbox" checked={selectedOptions.includes('Option 1')} onChange={() => handleCheckboxChange('Option 1')} />
          <span onClick={() => handleOptionClick('Option 1')}>Option 1</span>
        </li>
        <li>
          <input type="checkbox" checked={selectedOptions.includes('Option 2')} onChange={() => handleCheckboxChange('Option 2')} />
          <span onClick={() => handleOptionClick('Option 2')}>Option 2</span>
        </li>
        <li>
          <input type="checkbox" checked={selectedOptions.includes('Option 3')} onChange={() => handleCheckboxChange('Option 3')} />
          <span onClick={() => handleOptionClick('Option 3')}>Option 3</span>
        </li>
        <li>
          <input type="checkbox" checked={selectedOptions.includes('Option 4')} onChange={() => handleCheckboxChange('Option 4')} />
          <span onClick={() => handleOptionClick('Option 4')}>Option 4</span>
        </li>
      </ul>
      <h3>Selected Options:</h3>
      <ul>
        {selectedOptions.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question3a;