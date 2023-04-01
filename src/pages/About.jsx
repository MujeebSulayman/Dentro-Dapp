import React from 'react';
import { Testimonials } from '../components';
import FeedbackCard from '../components/FeedbackCard';
import styles, { layout } from '../style';

const About = () => {
  return (
    <section className={` flex flex-col mt-11`}>
      <div className={`${layout.sectionInfo} justify-center items-center`}>
        <p
          className={`${styles.paragraph} font-extrabold text-xl text-gradient font-poppins justify-center item-center`}
        >
          OUR STORY
        </p>
        <h3
          className={`${styles.heading2} flex justify-center text-center items-center font-poppins mt-3`}
        >
          About DentroCoin
        </h3>
        <p
          className={`${styles.paragraph} justify-center items-center text-center font-poppins max-w-[670px]`}
        >
          Dentro Project is all about saving our planet earth, the lives within
          and the prosperity of all. Let’s make our planet Greener!
        </p>
      </div>

      <section id='featured' className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2
            className={`${styles.heading2} flex justify-center text-center items-center font-poppins `}
          >
            -----------
          </h2>
          <p className={`${styles.paragraph} text-left mr-10 ml-10`}>
            Dentro is derived from the Greek word “∆evtpo” meaning “The Tree”
            and Dentro Project takes its root from the consideration of TREE as
            a crucial element necessary to the survival of our earth and all the
            livings that inhabit it. In mythologies, Tree represents life,
            growth and by extension, the wisdom, power and prosperity.
            Therefore, Dentro Project is all about saving our planet earth, the
            lives within and the prosperity of all. Earth is ours. Humans, by
            virtue of diverse capabilities as endowed, may travel to the space
            and explore other planets, but the starting and returning points are
            still the earth planet, for nowhere is more designed for human
            living than earth. The advent of modernization and industrialization
            has never impacted our planet more than now. The increasing
            emissions of greenhouse gases into the atmosphere, deforestation and
            human extractive activities that turned our once blooming forests to
            deserts, have led to the increasing carbons with all its attendant
            consequences. Government of the world and all stakeholders are
            concerned about the Climate Change. The United Nations efforts at
            curbing the impact of climate change are on increase. The
            consideration of alternative energy sources by developed and
            developing economies is evident in various government budgets. All
            these affirm the necessity to save our world for ourselves. At prime
            level, is human activities that plundered our forests. It is
            estimated that the land space equals the size of Panama is lost to
            deforestation annually, and it if continues at this rate, our earth
            may be unsafe to live in the next hundred years. Dentro project, as
            a charity deal to be undertaken by Dentro Foundation, targets
            revival of forests, by promoting plant of reserve trees, greening of
            metropolis, establishment of forest and games reserves and other
            activities that will reinforce the realization of re-greening goal
            of the project Therefore, in order to achieve and sustain this
            planet re-greening goal, the project envisions a phenomenon which
            will give birth to numerous establishments that will operate
            business across various industries, from which gains yearly grants
            may be secured to continually funding the re-greening efforts of the
            Dentro Foundation, hence the DentroBiz. DentroBiz is the arm of
            Dentro Project which fronts the establishment of businesses;
            restaurant chains, supermarket chains, hotels, resorts, plantations,
            recreational centers, malls, real estates, oil and gas as well as
            communication services. Through DentroBiz, parallel organisations
            will be created to further the use of the project token-Dentrocoin
            and advance its adoption and popularity. DentroBiz is the bedrock of
            the Independence for Crypto Economy which is the second purpose of
            Dentro Project.
          </p>
        </div>
      </section>
      <h2 className={`${styles.heading4} flex flex-row justify-center items-center mt-10`}>
        Review
      </h2>
      <div className={`${styles} ${styles.flexCenter}`}>
        <Testimonials />
      </div>
    </section>
  );
};

export default About;
