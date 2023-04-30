import React from 'react';
import styles, { layout } from '../style';

const Roadmap = () => {
	return (
		<section className={`${layout.section}`}>
			<div className={`${layout.sectionInfo} flex justify-center items-center`}>
				<h2
					className={`${styles.heading2} flex justify-center text-center m-9 items-center font-poppins `}
				>
					Roadmap
				</h2>
				<div
					className={`${styles.paragraph} text-left justify-center items-center`}
				>
					<p className='italic mb-6 flex justify-center items-center'>
						[This Roadmap is temporary and it’s subject to review]
					</p>
					<p className='flex justify-center items-center'>
						DENTRO Team has developed a culture of delivering on the promises.
						As such, the accomplishments speak volume since the inception of the
						project in the first quarter of the year 2021. This roadmap review
						therefore itemizes the project accomplishments and what we look on
						to bring into the crypto space as a proponent of planet re-greening
						and advocate of independence for crypto-economy:
					</p>
					<h2 className={`${styles.heading4} pt-[55px]`}>1st Quarter 2021</h2>
					<ul className={`${styles.paragraph} ml-9 roadmap`}>
						<li className='pt-6'>Idea Generation</li>
						<li>Constitution of Dentro Project Team.</li>
						<li>Project Planning and Design 2nd Quarter 2021.</li>
					</ul>
					<h2 className={`${styles.heading4} pt-10`}>2nd Quarter 2021.</h2>
					<ul className={`${styles.paragraph} ml-9 roadmap`}>
						<li className='pt-6'> Launching of social media platforms </li>
						<li> The Launch of the Project</li>
						<li> website:- https://www.dentrocioin.com </li>
						<li> Dentrocoin v1 Smart Contract </li>
						<li> Deployment Whitepaper</li>
						<li> Development Dentrocoin v1 Giveaway (Airdrop) </li>
					</ul>
					<h2 className={`${styles.heading4} pt-14`}>3rd Quarter 2021.</h2>
					<ul className={`${styles.paragraph} ml-9 roadmap`}>
						<li className='pt-6'>
							Dentrocoin v2 Smart Contract Deployment and Migration Launching
						</li>
						<li>DENTRO/BNB Liquidity Pool on DEX- Pancakeswap.finance</li>
						<li>The Lock 55% Dentrocoin and LP Token with DxSale </li>
					</ul>
					<h2 className={`${styles.heading4} pt-14`}>4th Quarter 2021.</h2>
					<ul className={`${styles.paragraph} ml-9 roadmap`}>
						<li className='pt-6'>Listing of Dentrocoin on CEXes </li>
						<li>DentroBiz’s incorporation of Dentlink International</li>
						<li>Listing of Dentrocoin on Coinmarketcap </li>
						<li>Commissioning of Dentlink Mall, in West Africa.</li>
					</ul>
					<h2 className={`${styles.heading2} pt-16`}>1st Quarter 2022.</h2>
					<ul className={`${styles.paragraph} ml-9 roadmap`}>
						<li className='pt-6'>
							Launching of DentroPay; Official Decentralised Wallet of
							Dentrocoin for Sending, Receiving and Storage of Cryptocurrencies
						</li>
						<li>
							Mini Swap: Exchanging Cryptocurrencies to Dentrocoin on DentroPay
						</li>
						<li>Mini P2P: Buying Dentrocoin with Fiat on DentroPay</li>
						<li>Website Redevelopment</li>
						<li>Whitepaper Review</li>
						<li>Roadmap Review</li>
						<li>Influencers promotions</li>
						<li>DentroPay Referral Campaign targeting 100,000 holders</li>
					</ul>
					<h2 className={`${styles.heading4} pt-14`}>2nd Quarter 2022.</h2>
					<ul className={`${styles.paragraph} ml-9 roadmap`}>
						<li className='pt-6'>
							Launching of Dentro-MS for Dentrocoin’s Merchants’ Adoption
						</li>
						<li>Media Promotions</li>
						<li>Activation of Global Airtime Top-up on DentroPay</li>
						<li>More Major CEX Listings of Dentrocoin</li>
					</ul>
					<h2 className={`${styles.heading4} pt-14`}>3rd Quarter 2022.</h2>
					<ul className={`${styles.paragraph} ml-9 roadmap`}>
						<li className='pt-6'>Formal Launching of Dentro Foundation</li>
						<li>Commencement of Re-greening Agenda</li>
						<li>Saving and Staking on DentroPay</li>
						<li> DEX integration on DentroPay Dapp</li>
						<li>More Media Coverage Promotions </li>
						<li>First Vesting of the Locked Tokens</li>
						<li>More CEX Listings and IEOs</li>
						<li>First Burning of Unsold Tokens from IEOs</li>
					</ul>
					<h2 className={`${styles.heading4} pt-14 font-poppins`}>4th Quarter 2022.</h2>
					<ul className={`${styles.paragraph} ml-9 roadmap`}>
						<li className='pt-6'>Extension of DentroBiz Tentacles</li>
						<li>Further Planting Efforts by Dentro Foundation</li>
						<li>More Major Listing of Dentrocoin</li>
						<li>Reviewing the Swap and P2P Features on DentroPay</li>
						<li>More Media Promotions</li>
						<li></li>
					</ul>
					<p className='italic font-poppins'>
						Special Event Estimate of Trees Planted in 2022 and Dentrocoin’s
						Burning <br /> NEXT: Further Development of the Dentro Ecosystem and
						Replication of Successes from DentroBiz and Dentro Foundations in
						Other Regions <br /> Note: Subsequent phases will result from the
						successes recorded from the unveiled phase
					</p>
				</div>
			</div>
		</section>
	);
};

export default Roadmap;
