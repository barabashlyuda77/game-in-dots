import React from 'react';
import './leader-board.scss';

import Winner from '../winner/winner.js';

function LeaderBoard() {
  return (
    <div className="leader-board">
      <h1>Leader Board</h1>
      <div className="winners-wrapper">
        <Winner
          userName="User Name"
          dateTime="Data and Time"
         />
         <Winner
           userName="User Name"
           dateTime="Data and Time"
          />
      </div>
    </div>
  );
}

export default LeaderBoard;
