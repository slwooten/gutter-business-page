import React from 'react';
import logoImg from '../logo/gglogo.png';

const toHome = () => {
  window.location.replace('/');
}

const Logo = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" onClick={toHome}>Gutter Gang</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Call</a>
        <a className="nav-link" href="#">Email</a>
        <a className="nav-link" href='#'>About</a>
      </div>
    </div>
  </div>
</nav>
      <img src={logoImg} alt='LogoImage' className='img-fluid'/>
    </>
  )
}

export default Logo;
