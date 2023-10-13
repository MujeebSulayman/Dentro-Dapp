import React from "react";
import styles, { layout } from "../style";
import { featureNFT } from "../constants";
import FeaturesCard from "../components/FeaturesCard";

const Features = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex flex-col `}
    >
      <div className={`${layout.sectionInfo} flex justify-center items-center`}>
        <p
          className={`flex justify-center text-[25px]  text-gradient text-center items-center font-poppins `}
        >
          Features
        </p>
        <h2
          className={`flex justify-center items-center font-poppins text-white md:text=[60px] text-[55px] mb-20 font-b`}
        >
          Access The Future
        </h2>

        <div className="absolute z-[0] w-[60%] h-[60%] -left-[30%] rounded-full blue__gradient1 bottom-20 hidden sm:block" />

        <div className="absolute z-[0] w-[60%] h-[60%] -right-[0%] top-[90%] rounded-full blue__gradient1 bottom-90 hidden sm:block" />
        <div className="flex flex-wrap justify-center justify-center w-full feedback-container relative z-[1]">
          {featureNFT.map((card) => (
            <FeaturesCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
