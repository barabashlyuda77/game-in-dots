import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWinners } from '../../actions/index.js';
import './leader-board.scss';

import Winner from '../winner/winner.js';

class LeaderBoard extends Component {
  componentDidMount() {
    fetch('http://starnavi-frontend-test-task.herokuapp.com/winners')
    .then((response) => response.json())
    .then((winners) => this.props.setWinners(winners))
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
  setWinners
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
