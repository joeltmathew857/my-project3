import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Define the increment method to increase the count by 1
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Define the decrement method to decrease the count by 1
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Define the reset method to set the count back to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="p-4">
      {/* Buttons with click handlers to call the methods */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        onClick={increment}
      >
        Increment!
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
        onClick={decrement}
      >
        Decrement!
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        onClick={reset}
      >
        Reset
      </button>
      <h1 className="mt-4">Current Count: {count}</h1>
    </div>
  );
};

export default Counter;
