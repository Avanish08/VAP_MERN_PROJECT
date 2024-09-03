import logo from './newlogo2.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-dark-purple p-4 min-h-screen rounded-md mb-4 md:mb-0 w-80 md:w-40rem xl:w-44rem lg:w-42rem sm:w-8rem">
      <img src={logo} alt="logo" className="w-full h-auto mx-auto" />
      <ul className="flex flex-col justify-center ">
        <li className="mb-10">
          <Link to="/main/Home" className="text-white font-bold text-2xl py-2 px-4 rounded hover:underline h-12">
            Home
          </Link>
        </li>
        <li className="mb-10">
          <Link to="/main/About" className="text-white font-bold text-2xl py-2 px-4 rounded hover:underline h-12">
            About
          </Link>
        </li>
        <li className="mb-10">
          <Link to="/main/Services" className="text-white font-bold text-2xl py-2 px-4 rounded hover:underline h-12">
            Services
          </Link>
        </li>
        <li className="mb-10">
          <Link to="/main/ContactUs" className="text-white font-bold text-2xl py-2 px-4 rounded hover:underline h-12">
            Contact Us
          </Link>
        </li>
        <li className="mt-10">
          <Link to="/login" className="text-white font-bold text-2xl py-2 px-4 rounded hover:underline h-12">
            LogOUT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;