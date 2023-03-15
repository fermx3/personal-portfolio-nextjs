import Image from 'next/image';
import Link from 'next/link';

import { Fragment, useEffect, useState } from 'react';
import SocialIcons from '../homePage/contact/social-icons';
import HamburguerIcon from '../ui/hamburguer-icon';

import classes from './main-navigation.module.css';

const links = [
  {
    slug: 'portafolio',
    name: 'Portafolio',
  },
  {
    slug: 'blog',
    name: 'Blog',
  },
  {
    slug: '#contacto',
    name: 'Contacto',
  },
];

const MainNavigation = ({ font }) => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleClick = (e) => {
    if (!opened) {
      setAnimateOut(false);
      setOpened(true);
    } else {
      setAnimateOut(true);
      setTimeout(() => {
        setOpened(false);
      }, 200);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fragment>
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
        <div className={classes.navMenu}>
          {links.map(({ name, slug }) => (
            <Link key={name} href={`/${slug}`}>
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div
        id='mobileMenu'
        className={`${font} ${classes.navMobileMenu} ${
          animateOut && classes.animateOut
        } ${opened && classes.opened} `}
      >
        <div className={classes.navBarLinks}>
          {links.map(({ name, slug }) => (
            <Link key={name} href={`/${slug}`} onClick={handleClick}>
              <Image
                src={`/images/icons/menu/${name.toLowerCase()}.svg`}
                alt={`${name} icon`}
                width={25}
                height={25}
              />
              {name}
            </Link>
          ))}
        </div>
        <div className={classes.navContact}>
          <SocialIcons />
          <a href='mailto:hola@webloom.com.mx'>hola@webloom.com.mx</a>
        </div>
      </div>
    </Fragment>
  );
};

export default MainNavigation;
