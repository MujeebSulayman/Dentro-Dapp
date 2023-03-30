import React from 'react';
import styles, { layout } from '../style';
const Foundation = () => {
  return (
    <section id='featured' className={layout.section}>
      <div className={`${layout.sectionInfo} flex mb-11`}>
        <h2 className={`${styles.heading2} flex flex-row justify-center items-center`}>
          DENTRO<span className='text-gradient ml-5'>FOUNDATION</span>
        </h2>
       
        <p className={`${styles.paragraph} text-dimWhite  mt-5`}>
          Foundation is an integral part of Dentro Ecosystem without which
          Dentro Project re-greening mission will be unrealizable. Dentro
          Foundation is a non -profit making organization with the sole mission
          to make this earth green, safe and secure. Dentro foundation with
          branches across the continents will collaborate with heads of
          governments in various regions and relevant arms/agencies of UN and
          other regional organizations to collaborate on combating climate
          change and neutralize its effects. Dentro Foundation will work with
          various local organizations to assess the dangers and educate the
          local populace on defects of deforestation, human extractive
          activities and explorations. Where possible, the foundation will
          influence studies and researches into the alternative energies and
          affordability to reduce the dangers which are inherent in the existing
          systems. The Dentro Foundation, although will be positioned to attract
          local and international aids, its main seed capital will spring from
          20% of Dentrocoin Total Supply. Dentro Foundation will get more
          funding from the grants accruing from the profits generated on
          DentroBiz venturing activities, hence continuous sustenance of
          re-greening agenda
        </p>
      </div>
    </section>
  );
};

export default Foundation;
