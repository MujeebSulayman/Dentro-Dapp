import React from 'react'

const Whitepaper = ({ styles }) => {
  return (
      <button
          type='button'
          className={`py-4 px-6 flex justify-between items-center font-poppins font-normal text-[18px] text-white outline-none ${styles} gap-6 rounded-[5px] right-10 mb-[50px] circle-btn`}
      >
          Whitepaper
      </button>
  )
}

export default Whitepaper