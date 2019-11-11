import React, { Component } from 'react';
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

class ControlButtons extends Component {
  componentDidMount() {
    this.props.getSettings();
  }

  saveUserName = (name) => {
    this.props.saveUserName(name);
  }

  clickHandler = () => {
    if (!this.props.isGameStarted) {
      this.props.startGame();
      this.props.highlightRandomSquare();
    }
  }

  render() {
    return (
      <div className="control-buttons">
        <DifficultyDropdown modes={this.props.modes}/>
        <Input onChange={this.saveUserName} />
        <Button
          text="Play"
          onClick={this.clickHandler}
          disabled={this.props.isGameStarted ? 'disabled' : ''}
        />
      </div>
    );
  }
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
