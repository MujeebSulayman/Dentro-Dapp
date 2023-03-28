import React from 'react';
import styles, { layout } from '../style';
import { features } from '../constants';
import Button from './Button';

const Business = () => {
  return (
    <section id='featured' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} ss:leading-[67px] leading-[60px]`}>
          Why You Should <br />
          Choose Dentrocoin?
        </h2>
        <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
          Dentro is derived from the Greek word “∆evtpo” meaning “The Tree” and
          Dentro Project takes its root from the consideration of TREE as a
          crucial element necessary to the survival of our earth and all the
          livings that inhabit it. In mythologies, Tree represents life, growth
          and by extension, the wisdom, power and prosperity. Therefore, Dentro
          Project is all about saving our planet earth, the lives within and the
          prosperity of all.
        </p>
        <Button styles='mt-10' />
      </div>
    </section>
  );
};

export default Business;
