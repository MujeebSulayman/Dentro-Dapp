import React from 'react'
import { marketplace } from '../constants'
import styles from '../style'
import MarketplaceCard from './MarketplaceCard'

const Marketplace = () => {
  return (
    <section
      id='clients'
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {marketplace.map((card) => (
          <MarketplaceCard key={card.id} {...card} />
        ))}
      </div>

    </section>
  )
}

export default Marketplace