import React, { Component } from 'react';
import './difficulty-dropdown.scss';

class DifficultyDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  clickHandler = () => {
    this.setState({ active: !this.state.active });
  }

  render() {
    const dropDownClassName = this.state.active ? 'active' : '';

    return (
      <div className={`difficulty-dropdown ${dropDownClassName}`} onClick={this.clickHandler}>
        <div className="selected">
          Pick game mode
          <span className="arrow"></span>
        </div>
        <ul className="dropdown-list">
          <li>Easy2</li>
          <li>Easy3</li>
          <li>Easy4</li>
        </ul>
      </div>
    );
  }
}

export default DifficultyDropdown;
