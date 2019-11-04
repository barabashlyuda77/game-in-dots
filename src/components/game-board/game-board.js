import React from 'react';
import { connect } from 'react-redux';
// import { } from '../../actions/index.js';
import './game-board.scss';

import ControlButtons from '../control-buttons/control-buttons.js';
import Message from '../message/message.js';
import Field from '../field/field.js';

function GameBoard(props) {
  return (
    <div className="game-board">
      <ControlButtons />
      <Message text="Message here" status="unactive"/>
      <Field numberOfSquares={props.dificulty}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  const dificulty = state.settings[state.activeMode] !== undefined
    ? state.settings[state.activeMode].field
    : null;

  return {
    dificulty
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
