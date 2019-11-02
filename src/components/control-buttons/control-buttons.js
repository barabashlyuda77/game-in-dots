import React from 'react';
import './control-buttons.scss';

import Button from '../button/button.js';
import DifficultyDropdown from '../difficulty-dropdown/difficulty-dropdown.js';

function ControlButtons() {
  return (
    <div className="control-buttons">
      <DifficultyDropdown />
      <input type="text" placeholder="Enter your name"/>
      <Button text="Play" onChange />
    </div>
  );
}

export default ControlButtons;
