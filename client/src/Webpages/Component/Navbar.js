import React from 'react';
import logo from '../Component/newlogo2.png';

const Navbar = () => {
  return (
    <nav className="bg-[#051D40] text-[#E9EAEC] text-lg h-[4rem] md:h-[4.5rem] lg:h-[5rem]">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-left">
          <div className="flex-shrink-0 justify-self-start">
            <img src={logo} alt="Logo" className="h-[4rem] md:h-[4.5rem] lg:h-[5rem] mr-2" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
