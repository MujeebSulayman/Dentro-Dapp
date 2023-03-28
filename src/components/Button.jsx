import React from 'react';

const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-poppins font-bold text-[18px] text-primary outline-none ${styles} rounded-[10px] btn` }
    >
      Buy DentroCoin
    </button>
  );
};

export default Button;
