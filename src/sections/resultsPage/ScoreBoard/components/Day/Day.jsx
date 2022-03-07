import React from 'react';

const Day = ({day, map}) => {
  return (
    <div>
      <span style={{marginRight: '12px'}}>Day {day}:</span> <span className="text--light">{map}</span>
    </div>
  );
};

export default Day;