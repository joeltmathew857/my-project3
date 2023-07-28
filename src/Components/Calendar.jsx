import React, { useState } from 'react';

const MyApp = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* Change code below this line */}
      <GetInput input={inputValue} handleChange={handleChange} />
      <RenderInput input={inputValue} />
      {/* Change code above this line */}
    </div>
  );
};

const GetInput = ({ input, handleChange }) => {
  return (
    <div>
      <h3>Get Input:</h3>
      <input
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

const RenderInput = ({ input }) => {
  return (
    <div>
      <h3>Input Render:</h3>
      <p>{input}</p>
    </div>
  );
};

export default MyApp;
