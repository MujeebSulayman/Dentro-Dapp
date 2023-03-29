import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './BtnCopy';

const CardDeal = () => {
 
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading3} max-w-[470px]`}>
          DENTRO (BEP-20) Contract Address
        </h2>
        <p
          className={`${styles.paragraph} max-w-[500px] className='flex flex-row items-center py-[6px] px-[4px] bg-discount-gradient rounded-[10px] mb-9' text-[19px] mt-5`}
        >
          0xae5C84e1dfA1696949E67a2bBb2c9C91E4079007
        </p>

        <Button styles={`mt-10`}/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='' className='w-[100%] h-[100%]' />
      </div>
    </section>
  );
};
export default CardDeal;
