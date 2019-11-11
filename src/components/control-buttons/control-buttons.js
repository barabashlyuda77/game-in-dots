import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getSettings,
  saveUserName,
  highlightRandomSquare,
  startGame
} from '../../actions/index.js';
import './control-buttons.scss';

import Button from '../button/button.js';
import DifficultyDropdown from '../difficulty-dropdown/difficulty-dropdown.js';
import Input from '../input/input.js';

const ControlButtons = (props) => {
  useEffect(() => {
    props.getSettings();
  });

  const saveUserName = (name) => {
    props.saveUserName(name);
  }

  const clickHandler = () => {
    if (!props.isGameStarted) {
      props.startGame();
      props.highlightRandomSquare();
    }
  }

  return (
    <div className="control-buttons">
      <DifficultyDropdown modes={props.modes}/>
      <Input onChange={saveUserName} />
      <Button
        text="Play"
        onClick={clickHandler}
        disabled={props.isGameStarted ? 'disabled' : ''}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  const modes = Object.keys(state.settings);

  return {
    modes,
    isGameStarted: state.isGameStarted
  };
}

const mapDispatchToProps = {
  getSettings,
  saveUserName,
  highlightRandomSquare,
  startGame
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlButtons);
