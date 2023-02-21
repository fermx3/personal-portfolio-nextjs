import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import classes from './main-navigation.module.css';

const MainNavigation = ({ font }) => {
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useRouter();

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={` ${font} ${classes.navBar} ${scrolled && classes.scrolled}`}
    >
      <Link href='/'>
        <Image
          src='/images/logo.png'
          alt='webloom paginas web logo'
          width={1752 / 14}
          height={284 / 14}
        />
      </Link>
      {/* Insert mobile menu */}
      <div className={classes.navMenu}>
        <Link href={pathname !== '/' ? '/portafolio' : '/#portafolio'}>
          Portafolio
        </Link>
        <Link href='/#contacto'>Contacto</Link>
      </div>
    </div>
  );
};

export default MainNavigation;
