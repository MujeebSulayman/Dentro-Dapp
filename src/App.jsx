import React from 'react';
import styles from './style';
import { Footer, Navbar } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Foundation from './pages/Foundation';
import Ecosystem from './pages/Ecosystem';
import Roadmap from './pages/Roadmap';
import About from './pages/About';
import Home from './pages/Home';
import Mission from './pages/Mission';

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/foundation' element={<Foundation />} />
              <Route path='/roadmap' element={<Roadmap />} />
              <Route path='/ecosystem' element={<Ecosystem />} />
              <Route path='/about' element={<About />} />
              <Route path='/mission' element={<Mission/>}/>
            </Routes>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
