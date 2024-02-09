import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../../public/logo.jpg'
import { Navlist } from './Navlist'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-8 py-4 border-b-blue border-b '>
      <Link href="./">
        <Image src={Logo} width={130} alt='MiddleMan Branding logo'/>
      </Link>

      <nav>
        <ul className='flex text-xl gap-8 items-center'>
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
      </nav>
    </header>
  )
}

export default Navbar