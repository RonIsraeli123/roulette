import React, { useState } from 'react';
import HomeCard from './components/Card/Card';
import Game from './components/Game/Game';
import RandomNumbers from './components/General/RandomNumbers';
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
              <Game
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
