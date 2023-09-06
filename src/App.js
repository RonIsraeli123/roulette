import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { HomePage, FormPage, BallsResultPage } from './Pages';

import './App.css';

const App = () => {
  const languageType = useSelector((state) => state.language.languageType);

  return (
    <Router>
      <div className={`App ${languageType}`}>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/Form' element={<FormPage />} />
          <Route path='/randomNumber' element={<BallsResultPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
