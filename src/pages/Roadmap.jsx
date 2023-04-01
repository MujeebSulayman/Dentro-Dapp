import React from 'react';
import styles, {layout} from '../style';

const Roadmap = () => {
	return (
		<section className={` flex flex-col mt-11`}>
			<div
				className={`${layout.sectionInfo} justify-center items-center`}>
          <h2
          className={`${styles.heading2} font-extrabold text-[70px] font-poppins justify-center item-center`}
        >
          Roadmap
        </h2>
        </div>
		</section>
	);
};

export default Roadmap;
