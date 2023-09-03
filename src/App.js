import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage, FormPage, ResultPage } from './Pages';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/Form' element={<FormPage />} />
          <Route path='/randomNumber' element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
