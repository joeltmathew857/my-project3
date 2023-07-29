import React, { useState } from 'react';

const textAreaStyles = {
  width: 235,
  margin: 5
};

const MyToDoList = () => {
  const [userInput, setUserInput] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = () => {
    const itemsArray = userInput.split(',');
    setToDoList(itemsArray);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const items = toDoList.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <textarea
        onChange={handleChange}
        value={userInput}
        style={textAreaStyles}
        placeholder="Separate Items With Commas"
      />
      <br />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Create List
      </button>
      <h1 className="mt-4">My "To Do" List:</h1>
      <ul>{items}</ul>
    </div>
  );
};

export default MyToDoList;
