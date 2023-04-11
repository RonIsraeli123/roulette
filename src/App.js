import React, { useState } from 'react';
import { HomePage, FormPage, ResultPage } from './Pages';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

const App = () => {
  const [numPlayers, setNumPlayers] = useState(2);
  const [sumBalls, setSumBalls] = useState(3);
  const [result, setResult] = useState({});

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route
            path='/game'
            element={
              <FormPage
                numPlayers={numPlayers}
                sumBalls={sumBalls}
                setPlayers={(n) => setNumPlayers(n)}
                setBalls={(n) => setSumBalls(n)}
                setResult={(n) => setResult(n)}
              />
            }
          />
          <Route
            path='/randomNumber'
            element={
              <ResultPage
                players={numPlayers}
                sumBalls={sumBalls}
                setResult={(n) => setResult(n)}
                result={result}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
