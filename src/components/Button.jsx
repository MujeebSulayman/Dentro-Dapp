import React from 'react';

const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-white font-poppins font-bold text-[18px] text-primary outline-none ${styles} rounded-[5px] mb-[60px] btn`}
    >
      Buy Token
    </button>
  );
};

export default Button;
