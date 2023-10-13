import React from 'react';
import styles, { layout } from '../style';

const Utility = () => {
    return (
        <section id='featured'>
            <div className={`${layout.sectionInfo} m-2 md:m-20` }>
                <h2
                    className={`${styles.heading2} mt-11 flex font-poppins flex-row justify-center items-center`}
                >
                    <span className='text-gradient ml-3'>Utilities</span>
                </h2>
                <p className={`${styles.paragraph} pt-5 text-dimWhite font-poppins`}>
                    People utility token as a utility asset will be proof- of-stake, where holders can stake the token for a period of time and earn rewards of stake. The systemic plan is that annual stake of above 5million PUT will attract annual reward 10% PUT,

                    Another utility of People utility token(PUT) is the envisioned creation of a multi chain blockchain on which people utility token will sit. The blockchain interface will be devoid of scalability chain to chain transaction will be super fast, thereby fixing the problem of queuing in transaction and making transactions happen in real time. As a multi chain, the blockchain will be a solid and friendly base for other crypto projects to launch,we will create a robust,flexible and users attracting ecosystem.

                    Peer to peer:
                    Among the utilities of PUT is that users of the token will be able to transact without third party.PUT will be easily exchanged with most other native currencies of countries, also with other tokens and coins

                    As the native token of people wallet and PUT blockchain PUT will be a means of transaction between crypto projects. Transaction fees( Gas fees) will be in People's utility token in the future development.
                </p>
                <br />

                <div className='absolute z-[0] w-[20%] h-[20%] right-20 bottom-20 blue__gradient1 rounded-full' />
                <div className='absolute z-[0] w-[20%] h-[20%] top-80 bottom-20 blue__gradient1 rounded-full' />

                {/* gradient end */}

                <h2 className={`${styles.heading2} mt-11 flex font-poppins`}>Peer to peer:</h2>
                <p className={`${styles.paragraph} pt-5 text-dimWhite font-poppins`} >Among the utilities of PUT is that users of the token will be able to transact without third party. PUT will be easily exchanged with most other native currencies of countries.

                    As the native token of people wallet and PUT blockchain PUT will be a means of transaction between crypto projects. Transaction fees( Gas fees) will be in People's utility token.</p>
            </div>
        </section>
    )
}

export default Utility