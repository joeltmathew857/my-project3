import React, { useState } from 'react';

const MyComponent = () => {
  // State using useState hook, initial value is false
  const [visibility, setVisibility] = useState(false);

  // Define the toggleVisibility function to update the state
  const toggleVisibility = () => {
    setVisibility((prevVisibility) => !prevVisibility); // Toggle the visibility property
  };

  return (
    <div className="p-4">
      {/* Button with click handler to toggle visibility */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={toggleVisibility}
      >
        Click Me
      </button>

      {/* Conditional rendering based on state */}
      {visibility && (
        <h1 className="text-2xl mt-4 font-bold">Now you see me!</h1>
      )}
    </div>
  );
};

export default MyComponent;
