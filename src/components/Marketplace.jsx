import React from 'react'
import { marketplace } from '../constants'
import styles from '../style'
import MarketplaceCard from './MarketplaceCard'

const Marketplace = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <h2 className={`${styles.heading2} flex items-center justify-center pt-[30px]`}>
        People's utility token Nft marketplace</h2>
      <section
        id='clients'
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
      >
        <div className='absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient1 bottom-40 hidden sm:block' />

        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
          {marketplace.map((card) => (
            <MarketplaceCard key={card.id} {...card} />
          ))}
        </div>

      </section>
    </div>
  )
}

export default Marketplace