import React, { useState } from 'react';

const inputStyle = {
  width: 235,
  margin: 5,
};

function CheckUserAge() {
  const [input, setInput] = useState('');
  const [userAge, setUserAge] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    setUserAge(''); // Reset userAge when input changes
  };

  const submit = () => {
    setUserAge(input);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-2xl font-semibold mb-4">Enter Your Age to Continue</h3>
      <input
        style={inputStyle}
        type="number"
        value={input}
        onChange={handleChange}
        className="border rounded px-2 py-1"
      />
      <br />
      {/* Change code below this line */}
      {userAge === '' ? (
        <button onClick={submit} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      ) : userAge < 18 ? (
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          You Shall Not Pass
        </button>
      ) : (
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          You May Enter
        </button>
      )}
      {/* Change code above this line */}
    </div>
  );
}

export default CheckUserAge;
