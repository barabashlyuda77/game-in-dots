import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWinners } from '../../actions/index.js';
import './leader-board.scss';

import Winner from '../winner/winner.js';

class LeaderBoard extends Component {
  componentDidMount() {
    this.props.getWinners();
  }

  render() {
    return (
      <div className="leader-board">
        <h1>Leader Board</h1>
        <div className="winners-wrapper">
          {
            this.props.winners.map((winner) => {
              const dateTime = winner.date.split(';').reverse().join(' ');

              return <Winner
                userName={winner.winner}
                dateTime={dateTime}
                key={winner.id}
              />
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    winners: state.winners
  }
}

const mapDispatchToProps = {
  getWinners
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
