import React from 'react';
import styles, { layout } from '../style';
import { Stats } from '../components';
const Foundation = () => {
  return (
    <section id='featured'>
      <div className={`${layout.sectionInfo}`}>
        <h2
          className={`${styles.heading2} mt-11 flex font-poppins flex-row justify-center items-center`}
        >
          <span className='text-gradient ml-3'>PUT FOUNDATION</span>
        </h2> 

        <p className={`${styles.paragraph} pt-5 text-dimWhite font-poppins`}>
          People's utility token(PUT) foundation will be established to support and promote the development and adoption of PUT. The foundation will also support the development of PUT by funding and managing development teams, sponsoring hackathons and other events to encourage innovation, and providing technical resources and support to developers.

          Generally the Foundation would be the charity arm of the project. Where Empowerment and giving back to the people and communities will be the primary objective

          Objectives of PUT Foundation

          Empowerment: the team envisaged giving by to people in kinds through, empowerment to artisans, such as tools for Salon owners, Furniture stores, plumbers, Artist etc.

          Scholarships and grants: PUT Foundation would synchronize scholarship benefits to indigent but aspiring students and grants to the less privileged, widows and orphans. Giving back to the community is a veritable means of wealth distributions, value addition to people and alleviating poverty.
          The results of these to the projects community cannot be imagined.

          Also at the centre of PUT Foundation is the metropolitan green crusade. It's on record that people generate pollution more at the urban cities and metropolitans hence the project will adopt the business of tree planting. This will have a direct impact on humanity and the environment.
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
