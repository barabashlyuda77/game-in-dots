import React, { useState } from 'react';
import './input.scss';

const Input = () => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Enter your name"
      value={text}
      onChange={onChange}
    />
  );
}

export default Input;
