import React from 'react';
import styles from '../style';

import {
  Business,
  CardDeal,
  Clients,
  Hero,
  Stats,
  Testimonials,
} from '../components';

const Home = () => {
  return (
    <>
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
        </div>
      </div>
    </>
  );
};

export default Home;
