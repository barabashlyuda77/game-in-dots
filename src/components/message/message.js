import React from 'react';
import './message.scss';

function Message(props) {
  return (
    <div className={`message ${props.status}`}>
      {props.text}
    </div>
  );
}

export default Message;
