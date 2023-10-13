import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Choose = () => (
  <div className={`${styles.paddingY}`}>
    <h2 className={`${styles.heading2} flex items-center justify-center pt-[30px]`}>
      Why Choose People Utility Token </h2>
    <section
      id='clients'
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >


      <div className='absolute z-[0] w-[60%] h-[60%] -left-[40%] rounded-full blue__gradient bottom-40 hidden sm:block' />
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[40%] rounded-full blue__gradient bottom-40 hidden sm:block' />

      <div className='flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  </div>
);

export default Choose;
