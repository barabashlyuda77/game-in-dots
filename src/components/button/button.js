import React from 'react';
import './button.scss';

function Button(props) {
  return (
    <div className={`button ${props.disabled}`} onClick={props.onClick}>
      {props.text}
    </div>
  );
}

export default Button;
