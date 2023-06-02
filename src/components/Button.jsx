import React from 'react';

const Button = ({ styles }) => {
  return (
    <div className='flex flex-row justify-between items-center space-x-4'>

      <button
        type='button'
        className={`py-4 flex-1 px-6 flex justify-between items-center bg-white font-poppins font-normal text-[18px] text-primary outline-none ${styles} rounded-[5px] mb-[50px] btn`}
      >
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">

          Buy Token
        </a>
      </button>
      <button
        type='button'
        className={`py-4 px-6 flex-1 flex justify-center items-center bg-white font-poppins font-normal text-[18px] text-white outline-none ${styles} rounded-[5px] mb-[50px] circle-btn`}
      >
        <a href="https://people-utility-token.gitbook.io/peoples-utility-token/" target="_blank" rel="noopener noreferrer">

          Whitepaper
        </a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};

export default Button;
