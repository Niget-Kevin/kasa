import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/style/index.scss';
import '../src/style/base/normalize.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Logement from './pages/Logement';



function App() {
  return (
    <React.StrictMode>
      <Router>
        <div>
          <div className='main_container'>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />     
              <Route path="/logement/:id" element={<Logement />} />

              <Route path="/about" element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}


export default App;
