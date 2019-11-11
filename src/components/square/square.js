import React from 'react';
import { connect } from 'react-redux';
import { changeSquareStatusToUser, highlightRandomSquare } from '../../actions/index.js';
import './square.scss';

function Square(props) {
  const clickHandler = () => {
    if (props.status === 'pending') {
      props.changeSquareStatusToUser(props.squareId);
      props.highlightRandomSquare();
    }
  }
  return (
    <div className={`square ${props.status}`} onClick={clickHandler}></div>
  );
}

const mapDispatchToProps = {
  changeSquareStatusToUser,
  highlightRandomSquare
}

export default connect(null, mapDispatchToProps)(Square);
