import React from 'react';
import './App.scss';

import GameBoard from './components/game-board/game-board.js';
import LeaderBoard from './components/leader-board/leader-board.js';

function App() {
  return (
    <div className="app">
      <GameBoard />
      <LeaderBoard />
    </div>
  );
}

export default App;
