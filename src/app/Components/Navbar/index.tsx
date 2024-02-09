"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../../public/logo.jpg'
import { Navlist } from './Navlist'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const handleMenu = () => {
    const menu = document.querySelector('#menu-mobile')
    menu?.classList.toggle('hidden')
  }

  return (
    <header className='flex fixed top-0 items-center justify-between px-8 py-4 border-b-blue border-b h-20 w-full'>
      <Link href="./">
        <Image src={Logo} width={130} alt='MiddleMan Branding logo'/>
      </Link>

      <nav>
        <ul className='hidden lg:flex text-xl gap-8 items-center'>
          {
            Navlist.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>

        <ul id='menu-mobile' className='hidden flex flex-col items-center justify-center lg:hidden absolute top-20 left-0 h-screen bg-white z-50 w-full'>
        {
            Navlist.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>

        <button className='lg:hidden border' onClick={handleMenu}>
          <GiHamburgerMenu className='lg:hidden text-3xl m-2' />
        </button>
      </nav>
    </header>
  )
}

export default Navbar