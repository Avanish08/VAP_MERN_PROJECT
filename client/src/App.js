import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loginform from './Webpages/Loginform';
import Mainpage from './Webpages/Mainpage';
import Maincontent from './Webpages/Maincontent';
import Navbar from './Webpages/Component/Navbar';
import Rejs from './Webpages/Rejs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Rejs/>} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/main" element={<Mainpage />}>
          <Route path="" element={<Maincontent />} />
          <Route path="Home" element={<Maincontent />} />
          <Route path="About" element={<Maincontent />} />
          <Route path="Services" element={<Maincontent />} />
          <Route path="ContactUs" element={<Maincontent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;