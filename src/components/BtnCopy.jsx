import React from 'react'

const BtnCopy = ({styles}) => {
  return (
    <button
      type='btnCopy'
      className={`py-4 px-6 bg-blue-gradient font-poppins font-normal text-[18px] text-primary outline-none ${styles} rounded-[10px] btn`}
    >
      Copy Address
    </button>
  );
}

export default BtnCopy