import React from 'react';

import Navbar from './navbar/Navbar';

const styles = {
  image: {
    minWidth: '320px',
    height: '630px',
  }
}

const Schedule = () => {
  return (
    <>
      <Navbar />
      <h2 className='text-center p-3 m-3 inspection-h2-color'>Schedule your free inspection below!</h2>
      <div className='p-3 m-3 inspection-container'>
        <h3>How it works:</h3>
        <ul>
          <li>Book an open time using the Calendly below</li>
          <li>A confirmation is emailed to you and us</li>
          <li>24 hours before your inspection, you'll be reminded that we're coming by to take a look</li>
        </ul>
        <h4 className='text-center p-3 m-3 inspection-h4-color'>It's that easy!</h4>
      </div>
      <div class="calendly-inline-widget p-3 mb-4" data-url="https://calendly.com/guttergang/gutter-inspection?primary_color=562d9d" style={styles.image}></div>
    </>
  )
}

export default Schedule;
