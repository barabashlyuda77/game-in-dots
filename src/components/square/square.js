import React from 'react';
import './square.scss';

function Square(props) {
  return (
    <div className={`square ${props.status}`} onClick={props.onClick}></div>
  );
}

export default Square;
