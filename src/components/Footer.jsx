import React from 'react';
import dentro from '../assets/dentro.png';
import { footerLinks, socialMedia } from '../constants';
import styles from '../style';
import { Link } from 'react-router-dom';

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
			<div className='flex-[1] flex flex-col justify-start mr-10'>
				<Link to='/'>
					<img src={dentro} alt='' className='w-[26%] h-[27%] object-contain' />
				</Link>
				<p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
					Dentro Project is all about saving our planet earth, the lives within
					and the prosperity of all.
				</p>
			</div>

			<div className='flex-[1.8] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
				{footerLinks.map((footerlink) => (
					<div
						key={footerlink.id}
						className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
					>
						<h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
							{footerlink.title}
						</h4>
						<ul className='list-none mt-4'>
							{footerlink.links.map((link, index) => (
								<li
									key={link.id}
									className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
										index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
									}`}
								>
									<Link to={`/${link.id}`}> {link.name}</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>

		<div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
			<p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
				Copyright Ⓒ 2023 TheHemjay. All Rights Reserved.
			</p>

			<div className='flex flex-row md:mt-0 mt-6'>
				{socialMedia.map((social, index) => (
					<img
						key={social.id}
						src={social.icon}
						alt={social.id}
						className={`w-[21px] h-[21px] object-contain cursor-pointer ${
							index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
						}`}
						onClick={() => window.open(social.link)}
					/>
				))}
			</div>
		</div>
	</section>
);

export default Footer;
