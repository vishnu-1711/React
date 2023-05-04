import React from 'react';

 function Question1(props) {
  const items = props.items;

  return (
    <>
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>


    </>
  );
}

export default Question1;


