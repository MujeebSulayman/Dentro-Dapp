import React from 'react';
import { discount, robot } from '../assets';
import styles from '../style';
import GetStarted from './getStarted';

const Hero = () => {
  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='h-[32px] w-[32px]' />
          <p className={`${styles.paragraph} ml-2 `}>
            We owe it to humanity to save this planet.
          </p>
        </div>
        <div className='flex flex-row justify-center items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Make your life <br className='sm:block hidden' />
            <span className='text-gradient'>easier with </span>

            Dentrocoin
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
