import React, { useState } from 'react';
import { close, menu } from '../assets';
import put from '../assets/put.png';
import { Link, useNavigate } from 'react-router-dom';
import { navLinks } from '../constants';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const Navigate = useNavigate();

	return (
		<div className='w-full flex py-6 justify-between items-center navbar '>
			<img
				src={put}
				alt='people utility token'
				className='w-[140px] h-[100px] cursor-pointer'
				onClick={() => Navigate('/')}

			/>

			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal cursor-pointer text-[18px] ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						} text-white`}
					>
						<Link to={`/${nav.id}`}>{nav.title}</Link>
					</li>
				))}
			</ul>

			{/*-------------------- Mobile Devices------------- */}

			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-28px h-28px object-contain cursor-pointer'
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 backdrop-blur-sm backdrop-brightness-150 md:backdrop-filter-none absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className='list-none flex-col justify-end items-center flex-1'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] ${
									index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
								} text-white`}
							>
								<Link to={`/${nav.id}`}>{nav.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
