import React from 'react';

const CurrentDate = (props) => {
  return (
    <div>
      <p className="text-xl font-bold">The current date is: {props.date}</p>
    </div>
  );
};

const Calendar = () => {
  // Replace this line with your preferred method of getting the current date (e.g., using Date API).
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4">What date is it?</h3>
      <CurrentDate date={currentDate} />
    </div>
  );
};

export default Calendar;
