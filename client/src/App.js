import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loginform from './Webpages/Loginform';
import Mainpage from './Webpages/Mainpage';


import Rejs from './Webpages/Rejs';
import Navbar from './Webpages/Component/Navbar';
import Footer from './Webpages/Component/Footer';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Rejs />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/main" element={<Mainpage />} />
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;