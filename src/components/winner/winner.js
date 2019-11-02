import React from 'react';
import './winner.scss';

function Winner(props) {
  return (
    <div className="winner">
      <p>{props.userName}</p>
      <p>{props.dateTime}</p>
    </div>
  );
}

export default Winner;
