import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-20`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4
            className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]
            text-white'
          >
            {stat.value}
          </h4>
          <p
            className={`${styles.paragraph} text-gradient font-normal xs:text-[20] text-[15] xs:leading-[23px] leading-[21px] ml-2`}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
