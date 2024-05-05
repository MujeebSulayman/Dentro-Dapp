import React from 'react';
import styles, { layout } from '../style';
import { featureNFT } from '../constants';
import FeaturesCard from '../components/FeaturesCard';

const Features = () => {
	return (
		<section
			className={`${styles.paddingY} ${styles.flexCenter} flex flex-col `}>
			<div className={`${layout.sectionInfo} flex justify-center items-center`}>
				<p
					className={`flex justify-center text-[25px] text-gradient text-center items-center font-bold `}>
					Features
				</p>
				<h2
					className={`flex justify-center items-center text-white sm:text-[60px] text-[40px] mb-10 sm:mb-20 font-bold`}>
					Access The Future
				</h2>

				<div className='flex flex-wrap justify-center w-full feedback-container relative z-[1]'>
					{featureNFT.map((card) => (
						<FeaturesCard
							key={card.id}
							{...card}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
