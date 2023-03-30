import React from 'react';

import styles from './style';
import {
  Business,
  CardDeal,
  Clients,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from './pages/Contact';
import Foundation from './pages/Foundation';
import Ecosystem from './pages/Ecosystem';
import Roadmap from './pages/Roadmap';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <Routes>
              <Route path='/contact' element={<Contact />} />
              <Route path='/foundation' element={<Foundation />} />
              <Route path='/roadmap' element={<Roadmap />} />
              <Route path='/ecosystem' element={<Ecosystem />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart} `}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <CardDeal />
            <Testimonials />
            <Clients />
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
