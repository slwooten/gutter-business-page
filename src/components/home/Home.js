import React from 'react';

import Navbar from '../navbar/Navbar';
import logoImg from './logo.png';

const toPage = (e) => {
  window.location.replace(e.target.value);
}

const Home = () => {
  return (
    <main>
      <div id='top'></div>
      <Navbar />
      <div className="container-fluid">
        <img src={logoImg} alt='BannerImage' className='img-fluid rounded mx-auto d-block' />
      </div>
      <div className='row justify-content-center p-3'>
        <div className='col-sm-6 mb-5'>
          <div className='card text-center'>
            <div className='card-body'>
              <div className='text-center'>
                <h1>Schedule a free inspection below!</h1>
              </div>
              <div className='d-grid gap-2 col-6 mx-auto'>
                <button className='btn btn-color p-2 m-3' value={'/job'} onClick={toPage}>Free Inspection</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* INFO CARD */}
      <div className='row justify-content-center p-3 mt-5 mb-5 bg-light'>
        <div className='col-sm-6 mt-5 mb-5'>
          <div className='card text-center'>
            <div className='card-body'>
              <div className='gutter-info-container'>
                <h2>Why Gutter Maintinence is important:</h2>
                <p className='text-start p-3'>Here is some informational text.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR SERVICES CARD */}
      <div className='row justify-content-center p-3 mt-5 mb-5'>
        <div className='col-sm-6 mt-5 mb-5'>
          <div className='card text-center bg-light'>
            <div className='card-body'>
              <div className='gutter-info-container'>
                <h2>Our Services:</h2>
                <p className='text-start p-3'>Here is some informational text.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center bg-light'>
        <a className='btn btn-link p-3 m-3' href='#top'>Back to top</a>
      </div>
    </main>
  )
}

export default Home;
