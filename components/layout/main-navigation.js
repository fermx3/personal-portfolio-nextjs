import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import HamburguerIcon from '../ui/hamburguer-icon';

import classes from './main-navigation.module.css';

const MainNavigation = ({ font }) => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);

  const { pathname } = useRouter();

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleClick = () => {
    setOpened(!opened);
    console.log('Pressed');
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
          src='/images/site/logo.png'
          alt='webloom paginas web logo'
          width={1752 / 14}
          height={284 / 14}
        />
      </Link>
      <HamburguerIcon handleClick={handleClick} opened={opened} />
      <div className={`${classes.navMobileMenu} ${opened && classes.opened}`}>
        <div>
          <Link
            href={pathname !== '/' ? '/portafolio' : '/#portafolio'}
            onClick={handleClick}
          >
            Portafolio
          </Link>
          <Link href='/blog' onClick={handleClick}>
            Blog
          </Link>
          <Link href='/#contacto' onClick={handleClick}>
            Contacto
          </Link>
        </div>
      </div>
      <div className={classes.navMenu}>
        <Link href={pathname !== '/' ? '/portafolio' : '/#portafolio'}>
          Portafolio
        </Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/#contacto'>Contacto</Link>
      </div>
    </div>
  );
};

export default MainNavigation;
