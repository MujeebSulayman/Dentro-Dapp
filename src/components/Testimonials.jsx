import React from 'react';
import styles from '../style';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <section
      id='clients'
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div />
      <div className='w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={`${styles.heading2}`}>
          What people say about
          <h1 className={`text-gradient ${styles.heading2}`}>DentroCoin</h1>
        </h1>
        <div className='w-full md:mt-0  mt-6'>
          <p
            className={`${styles.paragraph} max-w-[450px] text-left pt-[27px]`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            accusamus, quam quis corrupti ad totam porro iste fugiat.
          </p>
        </div>

        <div className='flex flex-wrap sm:justify-start'>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
