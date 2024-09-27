import logo from './newlogo2.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-[#051D40] p-4 min-h-screen rounded-md mb-4 md:mb-0 w-full md:w-48.5% xl:w-48.5% lg:w-48.5% sm:w-full">
      <div className="logo-container mb-10 flex justify-center">
        <img src={logo} alt="logo" className="w-1/2 h-auto md:w-3/4 xl:w-1/2 lg:w-3/4 sm:w-1/2" />
      </div>
      <ul className="nav-links flex flex-col justify-center">
        <li className="nav-item mb-10">
          <Link to="/main/Home" className="nav-link w-full h-full block border border-gray-200 hover:border-[#FAD02C] hover:shadow-md transition duration-300 ease-in-out text-[#E9EAEC] font-bold text-lg md:text-2xl py-2 px-4 rounded h-12">
            Home
          </Link>
        </li>
        <li className="nav-item mb-10">
          <Link to="/main/About" className="nav-link w-full h-full block border border-gray-200 hover:border-[#FAD02C] hover:shadow-md transition duration-300 ease-in-out text-[#E9EAEC] font-bold text-lg md:text-2xl py-2 px-4 rounded h-12">
            About
          </Link>
        </li>
        <li className="nav-item mb-10">
          <Link to="/main/Services" className="nav-link w-full h-full block border border-gray-200 hover:border-[#FAD02C] hover:shadow-md transition duration-300 ease-in-out text-[#E9EAEC] font-bold text-lg md:text-2xl py-2 px-4 rounded h-12">
            Services
          </Link>
        </li>
        <li className="nav-item mb-10">
          <Link to="/main/ContactUs" className="nav-link w-full h-full block border border-gray-200 hover:border-[#FAD02C] hover:shadow-md transition duration-300 ease-in-out text-[#E9EAEC] font-bold text-lg md:text-2xl py-2 px-4 rounded h-12">
            Contact Us
          </Link>
        </li>
        <li className="nav-item mt-10">
          <Link to="/login" className="nav-link w-full h-full block border border-gray-200 hover:border-[#FAD02C] hover:shadow-md transition duration-300 ease-in-out text-[#E9EAEC] font-bold text-lg md:text-2xl py-2 px-4 rounded h-12">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
