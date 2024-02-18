"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GitHubLogo from '@/public/github-logo.svg';
import LinkedInLogo from '@/public/linkedin-logo.svg';
import MainLogo from '@/public/main-logo.svg';
import { PiHamburger, PiXCircle } from "react-icons/pi";
import { useState } from 'react';
import { buildClassName } from '@/utils/buildClassName';

const links = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    link: '/portfolio'
  },
  {
    id: 3,
    title: 'Contact',
    link: '/contact'
  }
]
  
const Navbar = () => {
  const [ navOpen, setNavOpen ] = useState(false);
  const pathName = usePathname();

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  }

  return (
    <div className='w-full h-24 top-0 bg-primary-base'>
      <div className='container mx-auto px-16 h-full'>
        <div className='flex justify-between items-center h-full'>
          {/* Desktop/Tablet */}     
          <Image 
            src={MainLogo}
            alt="Jorge Aranda's Logo. Displays a line art drawing of person on a laptop with a speech bubble that contains a </> symbol. 'Jorge Aranda' is displayed in front of the logo."
            height={96}
            priority={true}
          />
          <ul className='max-sm:hidden flex gap-x-8'>
            {
              links.map((item) => {
                return (
                  <li key={item.id} className={buildClassName(
                    'hover:text-secondary-light',
                    item.link === pathName ? 'text-secondary-base' : ''
                  )}>
                    <Link href={item.link}>
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <div className='max-sm:hidden flex gap-4'>
            <a href='https://github.com/Jorge626'>
              <Image
                src={GitHubLogo}
                alt="GitHub Logo. Links to Jorge's GitHub."
                height={24}
                width={24}
              />
            </a>
            <a href='https://www.linkedin.com/in/jorge-aranda-934731132/'>
              <Image
                src={LinkedInLogo}
                alt="LinkedIn Logo. Links to Jorge's LinkedIn."
                height={24}
                width={24}
              />
            </a>
          </div>

          {/* Mobile */}
          <div onClick={handleNavOpen} className='sm:hidden z-10'>
            {navOpen ? (
              <PiXCircle size={36}/>
            ) : (
              <PiHamburger size={36}/>
            )} 
          </div>

          <div className={buildClassName('sm:hidden absolute top-0 right-0 bottom-0 flex justify-center w-full h-screen bg-primary-base items-center text-center ease-in duration-300', 
          navOpen ? 'left-0' : 'left-[-100%]'
          )
          }>
            <ul>
              {
                links.map((item) => {
                  return (
                    <li key={item.id} onClick={handleNavOpen} className='p-6 text-2xl hover:text-secondary-light'>
                      <Link href={item.link}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Navbar
