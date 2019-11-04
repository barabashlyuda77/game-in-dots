import React from 'react';
import './field.scss';

import Square from '../square/square.js';
import Message from '../message/message.js';

function Field(props) {
  if (props.field.length === 0) {
    return <Message text="Please select game" status="active"/>
  }

  const lenghtOfSquare = 50;
  const lenghtOfField = Math.sqrt(props.field.length) * lenghtOfSquare;
  return (
    <div
      className="field"
      style={{width: `${lenghtOfField}px`, height: `${lenghtOfField}px`}}>
      {
        props.field.map((square) => {
          return <Square
            key={square.id}
            status={square.status}
          />
        })
      }
    </div>
  );
}

export default Field;
