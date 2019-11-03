import React from 'react';
import './field.scss';

import Square from '../square/square.js';

function Field() {
  const field = Array.from(Array(25).keys());
  return (
    <div className="field">
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
