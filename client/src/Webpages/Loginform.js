import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from './utils';

const Loginform = () => {
  const [loginInfo, setLoginInfo] = useState({
    Username: '',
    Password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevLoginInfo) => ({ ...prevLoginInfo, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { Username, Password } = loginInfo;
    if (!Username || !Password) {
      return handleError('There some Mismatched');
    }
    try {
      // Replace with your login API logic
      const response = await fetch('http://localhost:8080/auth/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo)
      });
      const result = await response.json();
      if (response.status === 400) {
        console.log('Error response:', result);
        handleError(result.message);
      } else if (response.status === 200) {
        console.log(result);
        handleSuccess('Login Successful');
        localStorage.setItem('Username', Username);
        
        setTimeout(() => {
          navigate('/main/Home');
        }, 1000);
      }
      else if (response.status === 204) {
        console.log(result);
        handleSuccess('Login Successful');
        localStorage.setItem('Username', Username);
        
        setTimeout(() => {
          navigate('/main/Home');
        }, 1000);
      }  
      else {
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
        <div className="max-w-md mx-auto flex flex-col">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
            <h2 className="text-2xl font-bold mb-6 text-center text-dark-purple">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="Username"
                value={loginInfo.Username}
                onChange={handleChange}
                placeholder="Enter your username"
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
                value={loginInfo.Password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-faint-navy"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-faint-navy hover:bg-dark-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <p className="mt-4 text-center text-gray-600 text-sm">
              Don't have an account? <Link to="/" className="text-orange-500 text-base py-2 px-4 rounded hover:underline h-12">
                Signup
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Loginform;