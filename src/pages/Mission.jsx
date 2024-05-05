import React from 'react';
import styles, { layout } from '../style';

const Mission = () => {
	return (
		<section id='featured'>
			<div className={`${layout.sectionInfo}`}>
				<h2
					className={`${styles.heading4} mt-11 mb-11 flex font-normal flex-row justify-center items-center`}>
					OUR MISSION
				</h2>
				<p
					className={`${styles.paragraph} flex flex-row text-dimWhite m-5 justify-center items-center font-normal`}>
					We aim to make this planet more habitable for human living through
					aggressive afforestation, while advancing the cryptocurrency adoption
					by pursuing the realization of independence for crypto economy with a
					view to enable the masses assessing their daily needs with
					cryptocurrencies without necessarily converting their digital assets
					to fait currencies. <br />
					<br /> Therefore this project targets planting of trees across the
					continents of the world and equally establish business platforms
					serving various human needs with cryptocurrencies as the principal
					medium of exchange. <br /> While this mission is very ambitious, we
					believe its accomplishment will go a long way to reduce the greenhouse
					gases in the atmosphere, normalize the climate and make our earth a
					safer place again. We owe it to humanity to save this planet. Hence
					the reason for targeting revival of forests, planting reserve trees,
					greening of metropolis through the collaborative efforts of Dentro
					Foundation, the charity arm of the Dentro Project. <br /> We also owe
					it to cryptocurrency as an industry to advance its adoption by the
					masses, whose current perception of the cryprocurrencies still remain
					in the doubt. As well, too much reliance of cryprocurrencies on the
					whims of traditional business institutions for adoption has done more
					harm to the stability of digital currencies as a medium of exchange
					and an alternative to cash. <br /> <br /> Recent instance is the
					announcement of the Tesla CEO, Elon Musk on the acceptance of bitcoin
					as payment for Tesla’s electronic cars, bitcoin and other major
					cryptocurrencies suddenly experienced correction to less than half of
					their worth. This incidence exposed the fragility of this new class of
					financial asset, a situation that raises doubt in all the
					stakeholders. Dentro Project therefore resolves to pursue the
					realization of INDEPENDENT CRYPTO-ECONOMY, through creation of
					business platforms that will ensure the usage of Dentrocoin and
					through which the masses will assess their daily transactional needs.
					With DentroBiz, we shall build resorts, economic tree plantations,
					restaurant chains, store chains, gas stations etc. For these services
					and products, the masses will be able to pay with Dentrocoin. <br />{' '}
					<br /> This will lessen the dependence of cryptocurrencies on the
					adoption of traditional businesses, and will go a very long way to
					ensure market stability for cryptocurrencies, which can then
					effectively serve as a store of value without the fear of unnecessary
					volatility. We have devised an ecosystem within which value will be
					transferred with the usage of Dentrocoin. Hence, in the market,
					Dentrocoin will become a necessary bridge between other
					cryptocurrencies and the masses.
				</p>
			</div>
		</section>
	);
};

export default Mission;
