import React, { useState } from 'react';
import { HomeCard, GameForm, RandomNumbers } from './components/index';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

const App = () => {
  const [numPlayers, setNumPlayers] = useState(2);
  const [sumBalls, setSumBalls] = useState(3);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<HomeCard />} />
          <Route
            path='/game'
            element={
              <GameForm
                players={numPlayers}
                sumBalls={sumBalls}
                setPlayers={(n) => setNumPlayers(n)}
                setBalls={(n) => setSumBalls(n)}
              />
            }
          />
          <Route
            path='/randomNumber'
            element={<RandomNumbers players={numPlayers} sumBalls={sumBalls} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
