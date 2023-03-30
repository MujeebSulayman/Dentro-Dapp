import React, { useState } from 'react';
import { close, menu } from '../assets';
import dentro from '../assets/dentro.png';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='w-full flex py-6 justify-between items-center navbar '>
      <Link to='/'>
        <img src={dentro} alt='dentrocoin' className='w-[100px] h-[100px]' />
      </Link>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
              index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            <Link to={`${nav.id}`}>{nav.title}</Link>
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
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.lenght - 1 ? 'mr-0' : 'mb-4'
                } text-white`}
              >
                <Link to={`${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
