import React from 'react';

import Logo from './Logo';

const toPage = (e) => {
  window.location.replace(e.target.value);
}

const Home = () => {
  return (
    <main>
      <Logo />
      <div className='info-container'>
        <button>Email</button>
        <button>Phone</button>
        <button>Something</button>
      </div>
      <div className='link-container'>
        <button value={'/job'} onClick={toPage}>Schedule Job</button>
        <button value={'/services'} onClick={toPage}>Our Services</button>
        <button value={'/testimonials'} onClick={toPage}>Testimonials</button>
      </div>
      <div className='gutter-info-container'>
        <h2>Why Gutter Maintinence is important:</h2>
        <p>Here is some informational text.</p>
      </div>
    </main>
  )
}

export default Home;
