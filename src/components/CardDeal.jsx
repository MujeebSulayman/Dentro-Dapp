import { useState } from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './BtnCopy';

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
        <div className='flex items-center justify-center w-64 h-10 py-2 border border-gray-300 rounded-md'>
          <input
            type='text'
            value={token}
            readOnly
            className='w-full text-gray-400 bg-transparent outline-none'
          />
        </div>

        <button
          onClick={copyToClipboard}
          className='px-4 py-2 border text-white bg-blue-gradient border-gray-300 rounded-md mt-7'
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
