import React, { useState } from 'react';

const ControlledInput = () => {
  const [input, setInput] = useState('');

  // Define the handleChange method to update the input state
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="p-4">
      {/* Input element with value and onChange event */}
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="px-4 py-2 border rounded outline-none"
      />
      <h4 className="mt-4">Controlled Input:</h4>
      <p>{input}</p>
    </div>
  );
};

export default ControlledInput;
