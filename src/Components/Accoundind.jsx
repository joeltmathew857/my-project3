import React, { useState } from "react";

const Accoundind = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccound = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container flex justify-center items-center h-screen">
      {items.map(({ namer, title, id }) => (
        <div className="box-border w-80 p-4 border-4 mb-4 relative" key={id}>
          <button
            className="absolute top-0 right-0 bg-gray-300 p-1 rounded-md"
            onClick={handleAccound}
          >
            +
          </button>
          <div className="shoetitle">
            <h1>{title}</h1>
          </div>
          <div className="showcontent">
            {isOpen && <p className="showtitle">{namer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accoundind;
