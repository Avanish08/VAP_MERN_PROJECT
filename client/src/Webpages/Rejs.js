import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { handleError ,handleSuccess} from './utils';

const Rejs = () => {
  const [regiInfo, setRegiInfo] = useState({
    Username: '',
    AddharCard: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });
const navigate =useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setRegiInfo((prevRegiInfo) => ({ ...prevRegiInfo, [name]: value }));
  };

  console.log('RegiInfo ->', regiInfo);

  const handleSignup = async (e) => {
    e.preventDefault();
    const { Username, AddharCard, Email, Password, ConfirmPassword } = regiInfo;
    if (!Username || !Email || !AddharCard || !Password || !ConfirmPassword) {
      return handleError('There some Mismatched');
    }
    try {
      const response = await axios.post('http://localhost:8080/auth/Regis', regiInfo);
      if (response.status === 400) {
        const error = response.data;
        console.log('Error response:', error);
        handleError(error.message);
      } else if (response.status === 200) {
        const result = response.data;
        console.log(result);
      }
      else if (response.status === 201) {
        handleSuccess('User Created Sucessful');
        setTimeout(()=>{
            navigate('/login')
        },1000)
      } else {
        handleError('Unknown error occurred');
      }
    } catch (err) {
      console.log('Error caught:', err);
      handleError(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md lg:w-4/5 xl:w-4/5 2xl:w-4/5 mx-auto flex flex-col">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignup}>
            <h2 className="text-2xl font-bold mb-6 text-center text-dark-purple">Register</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="Username"
                value={regiInfo.Username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-faint-navy"
               
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addhaar-card">
              AddharCard
              </label>
              <input
                id="addhaar-card"
                type="text"
                name="AddharCard"
                onChange={handleChange}
                value={regiInfo.AddharCard}
                placeholder="Enter your VID"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-faint-navy"
               
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="Email"
                onChange={handleChange}
                value={regiInfo.Email}
                placeholder="you@example.com"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-faint-navy"
               
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="Password"
                onChange={handleChange}
                value={regiInfo.Password}
                placeholder="Enter your password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-faint-navy"
               
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                name="ConfirmPassword"
                onChange={handleChange}
                value={regiInfo.ConfirmPassword}
                placeholder="Confirm your password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-faint-navy"
               
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-faint-navy hover:bg-dark-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
            <p className="mt-4 text-center text-gray-600 text-sm">
              Already have an account? <Link to="/login" className="text-orange-500 text-base py-2 px-4 rounded hover:underline h-12">
            Login
          </Link>
            </p>
          </form>
          <ToastContainer/>
        </div>
      </div>
     
    </>
  );
};

export default Rejs;