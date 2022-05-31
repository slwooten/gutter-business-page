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
                <h2 className='mb-4 purple-text'>Why Gutter Maintinence is important:</h2>
                <h3 className='mb-3 p-2 text-start purple-text'>Clogged Gutter Issues:</h3>
                <p className='text-start p-2'>Clogged gutters can cause water to collect in places where it shouldn't. This can lead to a variety of expensive and hazardous problems that include:
                </p>
                <ul>
                  <li className='gutter-font text-start'>leaks that reach the frame and fascia of the house</li>
                  <li className='gutter-font text-start'>leaks that reach the rooof of the house itself</li>
                </ul>
                <p className='text-start p-2'>These leaks result in <span className='green-text'>mold</span>, <span className='green-text'>rot</span>, and <span className='green-text'>mildew</span> - all hazards to health, and expensive repairs.</p>
                <h3 className='mb-3 p-2 text-start purple-text'>Prevent Clogged Gutters with Routine Maintenance and Cleaning:</h3>
                <p className='text-start p-2'>Just like anything else, issues regarding gutters can be prevented through <span className='green-text'>routine maintenance</span>.
                </p>
                <p className='text-start p-2'> Simply keeping gutters <span className='green-text'>clean</span>  and <span className='green-text'>free of debris</span> can prevent the need for expensive repair down the road.
                </p>
                <p className='text-start p-2'>This is where the <span className='purple-text'>Gutter Gang</span> comes in. Let us take care of this for you, so you don't have to worry about unneeded expenses in the future.
                </p>
                <h4 className='mb-3 p-2 text-center purple-text'>Unsure of Your Gutter Conditions?</h4>
                <h5 className='mb-2 p-1 text-center green-text'>Schedule a Free Inspection with us today!</h5>
                <button className='btn btn-color p-2 m-3' value={'/job'} onClick={toPage}>Free Inspection</button>
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
