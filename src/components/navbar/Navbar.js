import React from 'react';


const Navbar = () => {
  return (
    <>
      <nav id='navbar' className="navbar navbar-expand-lg bg-light mb-4 p-3 navbar-color sticky-top">
        <a href='/' className='nav-color-home p-2'>Home</a>
        <a href='mailto:guttergangclt@gmail.com' className='nav-color p-2'>Email</a>
        <a href='tel:704-437-6707' className='nav-color p-2'>Call</a>
        <a href='sms:+7044376707' className='nav-color p-2'>Text</a>
        <a href='/about-us' className='nav-color p-2'>About Us</a>
      </nav>
    </>
  )
}

export default Navbar;
