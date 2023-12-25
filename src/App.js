import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/style/index.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';


function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className='main_container'>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}


export default App;
