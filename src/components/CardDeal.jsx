import { useState } from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';

const CardDeal = () => {
  const [token, setToken] = useState(
    '0xae5C84e1dfA1696949E67a2bBb2c9C91E4079007'
  );
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(token);
    setCopied(true);
  }

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading3} max-w-[470px]`}>
          DENTRO (BEP-20) Contract Address
        </h2>

        <p
          className={`${styles.paragraph2} max-w-[470px] className='justity-center items-center py-[10px] px-[7px] bg-discount-gradient rounded-[10px] max-content-[470px] mt-9 text-start`}
        >
          <input
            type='text'
            value={token}
            readOnly
            className={`${styles} w-full text-black font-semibold outline-none`}
          />
        </div>

        <button
          onClick={copyToClipboard}
          className='px-4 py-2 border-1  text-white bg-gray-700 border-gray-300 rounded-md mt-7 font-poppins'
        >
          {copied ? 'Copied' : 'Copy Token'}
        </button>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='' className='w-[100%] h-[100%]' />
      </div>
    </section>
  );
};
export default CardDeal;
