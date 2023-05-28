import React from 'react';
import { discount, banner } from '../assets';
import styles from '../style';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-9'>
          <img src={discount} alt='discount' className='h-[32px] w-[40px]' />
          <p className={`${styles.paragraph} ml-2 `}>
            We owe it to humanity to save this planet.
          </p>
        </div>
        <div className='flex flex-row justify-center items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[62px] text-white ss:leading-[100px] leading-[75px]'>
            Making life <br />
            <span className='text-gray-500'>easier with </span>
            <br />
            People Utility Token
          </h1>
        </div>
        <h1 className='w-full'></h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The first crypto project set to give and return power to humanity(People) deploying liberalization and decentralization of Crypto financial system
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={banner}
          alt=''
          className='w-[100%] h-[100%] relative z-[5]'
        />

        {/* gradient start */}
        <div className='absolute z-[1] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
