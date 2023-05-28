import React from 'react'

const MarketplaceCard = ({ content, title }) => {
  return (
      <div>

          <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] bg-white/30 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 backdrop-blur-sm backdrop-brightness-150 md:backdrop-filter-none'>
              <h1 className='font-poppins flex items-center justify-center font-normal text-[28px] leading-[24px] text-white'>
                  {title}
              </h1>
              <p className='font-poppins flex justify-center items-center font-normal text-[18px] leading-[32.4px] text-dimWhite mt-6'>
                  {content}
              </p>
          </div>
      </div>
  )
}

export default MarketplaceCard