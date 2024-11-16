import React, { useState } from 'react';

const MyRef = React.forwardRef((props, ref) => {
  const [name, setName] = useState('');

  const updateValue = e => {
    setName(e.target.value);
    console.log(ref);
  };

  return (
    <div>
      <h1> Titre : {name}</h1>
      <input type="text" ref={ref} value={name} onChange={updateValue} />
    </div>
  );
});

export default MyRef;
