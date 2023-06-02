import React from 'react';
import styles, { layout } from '../style';
import { features } from '../constants';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'
      } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt='star' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id='featured' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} font-poppins text-gradient`}>
          Goals and Vision
        </h2>
        <p className={`${styles.paragraph} text-dimWhite max-w-[470px] mt-5`}>
          The Goal of the People's Utility token (PUT) project is to provide a decentralized, community-driven cryptocurrency that empowers people to take control of their finances and promote financial inclusivity.

          The Vision of the People utility token is to create a world in which everyone has access to a secure and reliable cryptocurrency that can be used for everyday transactions, investments, and savings. By promoting financial freedom and inclusivity, the People's Coin project seeks to enable people around the world to improve their lives and achieve their financial goals.
        </p>
        <div className='flex flex-row justify-center items-center'>
          <Button styles='mt-10' />
        </div>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
