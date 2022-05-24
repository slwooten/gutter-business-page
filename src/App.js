import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Schedule from './components/Schedule';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/job' element={<Schedule />} />
          <Route path='/services' element={<Services />} />
          <Route path='/testimonials' element={<Testimonials />} />
        </Routes>
      </>
    </Router>
  )
}

export default App;
