import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Choose = () => (
	<div className={`${styles.paddingY}`}>
		<h2
			className={`${styles.heading2} flex font-normal items-center justify-center pt-[30px]`}>
			Why Choose Us
		</h2>
		<section
			id='clients'
			className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
			<div className='flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]'>
				{feedback.map((card) => (
					<FeedbackCard
						key={card.id}
						{...card}
					/>
				))}
			</div>
		</section>
	</div>
);

export default Choose;
