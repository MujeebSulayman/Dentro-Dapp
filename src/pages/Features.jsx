import React from 'react'
import styles, { layout } from '../style';
import { featureNFT } from '../constants';
import FeaturesCard from '../components/FeaturesCard';

const Features = () => {
  return (
      <section
          id='clients'
          className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
      >
          <div className='absolute z-[0] w-[60%] h-[60%] -right-[40%] rounded-full blue__gradient bottom-70 hidden sm:block' />
          <div className={`${layout.sectionInfo} flex justify-center items-center`}>
            
              <p
                  className={`flex justify-center text-[25px]  text-gradient text-center items-center font-poppins `}
              >
                  Features
              </p>
              <h2 className={`flex justify-center items-center font-poppins text-white md:text=[60px] text-[55px] mb-20 font-b`}>
                  Access The Future
              </h2>

            
              <div className='absolute z-[0] w-[60%] h-[60%] -left-[40%] rounded-full blue__gradient bottom-20 hidden sm:block' />
           
              <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
                  {featureNFT.map((card) => (
                      <FeaturesCard key={card.id} {...card} />
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Features