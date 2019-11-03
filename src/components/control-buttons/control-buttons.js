import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSettings } from '../../actions/index.js';
import './control-buttons.scss';

import Button from '../button/button.js';
import DifficultyDropdown from '../difficulty-dropdown/difficulty-dropdown.js';

class ControlButtons extends Component {
  componentDidMount() {
    this.props.getSettings();
  }
  render() {
    return (
      <div className="control-buttons">
        <DifficultyDropdown modes={this.props.modes}/>
        <input type="text" placeholder="Enter your name"/>
        <Button text="Play" onChange />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const modes = Object.keys(state.settings);

  return {
    modes
  };
}

const mapDispatchToProps = {
  getSettings
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlButtons);
