import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Choose = () => (
  <section
    id='clients'
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className='absolute z-[0] w-[60%] h-[60%] -left-[40%] rounded-full blue__gradient bottom-40 hidden sm:block' />
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[40%] rounded-full blue__gradient bottom-40 hidden sm:block' />

    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Choose;
