import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import ContactUs from './ContactUs';

const Maincontent = () => {
  const location = useLocation();

  return (
    <>
      <div>
        {location.pathname === '/main/Home' && <Home />}
        {location.pathname === '/main/About' && <About />}
        {location.pathname === '/main/Services' && <Services/>}
        {location.pathname === '/main/ContactUs' && <ContactUs/>}
      </div>
    </>
  );
};

export default Maincontent;