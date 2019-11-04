import React, { Component } from 'react';
import './input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  onChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Enter your name"
        value={this.state.text}
        onChange={this.onChange}
      />
    );
  }
}

export default Input;
