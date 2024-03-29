"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the useRouter hook
import Logo from '../../../../public/logo.jpg';
import { Navlist } from './Navlist';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const pathname = usePathname()

  const handleMenu = () => {
    const menu = document.querySelector('#menu-mobile');
    menu?.classList.toggle('hidden');
    menu?.classList.toggle('flex');
    document.body.classList.toggle('overflow-hidden');
    document.body.classList.toggle('lg:overflow-auto');
  };

  const closeMenu = () => {
    const menu = document.querySelector('#menu-mobile');
    menu?.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <header className='flex z-50 top-0 items-center justify-between px-8 py-4 border-b-blue border-b h-20 w-full bg-white'>
      <Link onClick={closeMenu} href="/">
        <Image src={Logo} width={130} alt='MiddleMan Branding logo'/>
      </Link>

      <nav>
        <ul id='menu-mobile' className='hidden text-center lg:flex flex-col lg:flex-row items-start lg:items-center justify-start lg:static absolute top-20 left-0 h-screen bg-white lg:bg-transparent gap-20 lg:gap-10 z-50 w-full pl-8 pt-20 pb-20 lg:pt-0 lg:pl-0 lg:pb-0 text-2xl md:text-3xl font-black lg:text-base'>
          {Navlist.map((item, index) => (
            <li key={index}>
              <Link 
               className={pathname === item.link ? 'underline decoration-blue decoration-2 underline-offset-4' : ''}
               onClick={handleMenu} 
               href={item.link}>
                {item.name}
              </Link>
            </li>
            
          ))}
        </ul>

        <button aria-label="Abrir y Cerrar Menu" className='lg:hidden border' onClick={handleMenu}>
          <GiHamburgerMenu className='lg:hidden text-3xl m-2' />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
