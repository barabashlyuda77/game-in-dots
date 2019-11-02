import React from 'react';
import './game-board.scss';

import ControlButtons from '../control-buttons/control-buttons.js';
import Message from '../message/message.js';

function GameBoard() {
  return (
    <div className="game-board">
      <ControlButtons />
      <Message text="Message here"/>
      field
    </div>
  );
}

export default GameBoard;
