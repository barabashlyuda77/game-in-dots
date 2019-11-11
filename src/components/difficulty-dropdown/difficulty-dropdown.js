import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveMode } from '../../actions/index.js';
import './difficulty-dropdown.scss';

const DifficultyDropdown = (props) => {
  const [activeButton, setButton] = useState(false);

  const clickHandler = () => {
    setButton(!activeButton);
  }

  const dropDownClassName = activeButton ? 'active' : '';

  return (
    <div className={`difficulty-dropdown ${dropDownClassName}`} onClick={clickHandler}>
      <div className="selected">
        Pick game mode
        <span className="arrow"></span>
      </div>
      <ul className="dropdown-list">
        {
          props.modes.map((mode) => {
            return <li
              key={mode}
              onClick={() => props.saveMode(mode)}
            >{mode}</li>
          })
        }
      </ul>
    </div>
  );
}

const mapDispatchToProps = {
  saveMode
}

export default connect(null, mapDispatchToProps)(DifficultyDropdown);
