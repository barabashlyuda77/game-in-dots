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
      <Field field={props.field}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    field: state.field
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
