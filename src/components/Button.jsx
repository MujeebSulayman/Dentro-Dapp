import React from 'react';

const Button = ({ styles }) => {
  return (
    <div className='flex flex-row justify-between items-center space-x-4'>

      <button
        type='button'
        className={`py-4 flex-1 px-6 flex justify-between items-center bg-white font-poppins font-normal text-[17px] text-primary outline-none ${styles} rounded-[5px] mb-[50px] btn`}
      >
        Buy Token
      </button>
      <button
        type='button'
        className={`py-4 px-6 flex-1 justify-between items-center bg-white font-poppins font-normal text-[17px] text-white outline-none ${styles} rounded-[5px] mb-[50px] circle-btn`}

      >
        <a href="https://people-utility-token.gitbook.io/peoples-utility-token/" target="_blank" rel="noopener noreferrer">
          Whitepaper
        </a>
      </button>
    </div>
  );
};

export default Button;
