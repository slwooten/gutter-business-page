import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Schedule from './components/Schedule';

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/job' element={<Schedule />} />
        </Routes>
      </>
    </Router>
  )
}

export default App;
