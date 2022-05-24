import React from 'react';

import Logo from './logo/Logo';

const toPage = (e) => {
  window.location.replace(e.target.value);
}

const Home = () => {
  return (
    <main>
      <Logo />
      <div>
        <div className='d-grid gap-2 col-6 mx-auto'>
          <button className='btn btn-primary' value={'/job'} onClick={toPage}>Schedule Job</button>
          <button className='btn btn-primary' value={'/services'} onClick={toPage}>Our Services</button>
          <button className='btn btn-primary' value={'/testimonials'} onClick={toPage}>Testimonials</button>
        </div>
      </div>
      <div className='gutter-info-container'>
        <h2>Why Gutter Maintinence is important:</h2>
        <p>Here is some informational text.</p>
      </div>
    </main>
  )
}

export default Home;
