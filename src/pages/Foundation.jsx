import React from 'react';
import styles, { layout } from '../style';
import { Stats } from '../components';
const Foundation = () => {
  return (
    <section id='featured'>
      <div className={`${layout.sectionInfo}`}>
        <h2
          className={`${styles.heading4} mt-11 mb-11 flex font-poppins flex-row justify-center items-center`}
        >
          DENTRO<span className='text-gradient ml-3'>FOUNDATION</span>
        </h2>

        <p className={`${styles.paragraph} text-dimWhite mb-11 mt-[11] font-poppins`}>
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
      <section
        className={`${styles.flexCenter} flex-row  flex-wrap sm:mb-20 mb-20`}
      >
        <div
          className={`${styles.padding} flex justify-between gap-[20px] flex-wrap items-center`}
        >
          <Stats />
        </div>
      </section>
    </section>
  );
};

export default Foundation;
