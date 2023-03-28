import React from 'react';
import styles, { layout } from '../style';
import Button from './Button';
import card from '../assets/card.png'

const CardDeal = () => {
  return (
    <section id='' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better Crypto deal <br className='sm:block hidden' /> in a few
          steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          dolores quidem ab consectetur. Eligendi, placeat? Quo expedita aperiam
          odit. Illo vel qui esse facilis nostrum id dolores, tempore magnam
          corporis?
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt='' className='h-[100%] w-[100%]' />
      </div>
    </section>
  );
};

export default CardDeal;
