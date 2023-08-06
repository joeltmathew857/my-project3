import React from "react";

const Accoundind = ({ items }) => {
  return (
    <div>
      {items &&
        items.map(({ namer, title, id }) => (
          <div className="showfiled" key={id}>
            <div className="shoetitle">
              <h1>{title}</h1>
            </div>
            <div>
              <p className="showtitle">{namer}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accoundind;
