import React from 'react';
import styles, { layout } from '../style';
import { features } from '../constants';
import Button from './Button';

const Business = () => {
  return (
    <section id='featured' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>You do the business</h2>
      </div>
    </section>
  );
};

export default Business;
