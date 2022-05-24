import React from 'react';

const toHome = () => {
  window.location.replace('/');
}

const Logo = () => {
  return (
    <div className='logo-container'>
      <h1 onClick={toHome}>Logo Here</h1>
    </div>
  )
}

export default Logo;
