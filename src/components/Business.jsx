import React from 'react';
import styles, { layout } from '../style';
import { features } from '../constants';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
	<div
		className={`flex flex-row p-6 rounded-[20px] ${
			index !== features.length - 1 ? 'mb-6' : 'mb-0'
		} relative bg-white/20 backdrop-blur-sm backdrop-brightness-150 md:backdrop-filter-none `}>
		<div
			className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-discount-gradient`}>
			<img
				src={icon}
				alt='star'
				className='w-[50%] h-[50%] object-contain'
			/>
		</div>
		<div className='flex-1 flex flex-col ml-3'>
			<h4 className='font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
				{title}
			</h4>
			<p className='font-normal text-dimWhite text-[16px] leading-[24px]'>
				{content}
			</p>
		</div>
	</div>
);

const Business = () => {
	return (
		<section
			id='featured'
			className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={`${styles.heading2} font-normal text-gradient`}>
					People utility token <br /> (BEP-20)
				</h2>
				<p className={`${styles.paragraph} text-dimWhite max-w-[470px] mt-5`}>
					The first crypto project set to give and return power to the source
					which is humanity(People) deploying what we call liberalization or
					decentralization of Crypto financial system.
				</p>
				<p
					className={`${styles.paragraph} flex-wrap text-dimWhite max-w-[470px] mt-5`}>
					Contract Address: 0x112Cc0113A0AF8bC6246361D214B5b7b829CA1A2
				</p>
				<div className='flex flex-row justify-center items-center'>
					<Button styles='mt-10' />
				</div>
			</div>
			<div className={`${layout.sectionImg} flex-col`}>
				{features.map((feature, index) => (
					<FeatureCard
						key={feature.id}
						{...feature}
						index={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Business;
