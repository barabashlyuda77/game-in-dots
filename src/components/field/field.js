import React from 'react';
import './field.scss';

import Square from '../square/square.js';
import Message from '../message/message.js';

function Field(props) {
  const numberOfSquares = props.numberOfSquares;
  if (!numberOfSquares) {
    return <Message text="Please select game" status="active"/>
  }

  const field = Array.from(Array(Math.pow(numberOfSquares, 2)).keys());

  const lenghtOfSquare = 50;
  const lenghtOfField = numberOfSquares * lenghtOfSquare;
  return (
    <div
      className="field"
      style={{width: `${lenghtOfField}px`, height: `${lenghtOfField}px`}}>
      {
        field.map((_, i) => {
          return <Square
            key={i}
          />
        })
      }
    </div>
  );
}

export default Field;
