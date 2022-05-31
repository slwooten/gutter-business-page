import React from 'react';
import Navbar from '../navbar/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className='card p-3 m-3'>
        <div className='card-body'>
          <h2 className='text-center green-text'>About Us</h2>
          {/* <img className='img-fluid' src='' alt='' /> */}
          <p className='p-2 m-3 purple-text'>Here will be a paragraph about the business and it's owner.</p>
        </div>
      </div>
    </>
  )
}

export default AboutUs;
