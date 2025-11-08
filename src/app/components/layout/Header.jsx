import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import logo5 from '../../../../public/logo5.jpg'
import Image from 'next/image';
import Link from 'next/link';
import BasketCount from './ButtonIcon';
import Menu from './Menu';
export default function Header() {
  return (
    <div className='w-[95%] md:w-full h-15 bg-white px-7 md:px-8 fixed z-[9999]' >
      <nav className='w-full h-full flex justify-between items-center' >
        <div>
          <Image src={logo5} width={150} height={150} alt='logo'/>
        </div>
        <ul className='hidden  md:flex *:text-blue-500 *:mx-5 *:text-[20px] *:hover:mx-10 *:hover:text-amber-300 *:duration-400 '>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/shop'>Shop</Link></li>
          <li><Link href='/brands'>Brands</Link></li>
        </ul>
        <div className='flex'>
          <Menu/>
  
            <Link href='/basket'>
              <LocalMallIcon sx={{ fontSize: 30, color: '#6681b8' }} />
              <BasketCount/>
            </Link>
        </div>
      </nav>

    </div>
  )
}
