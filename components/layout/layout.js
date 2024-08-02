import { Fragment } from 'react';
import { Montserrat } from '@next/font/google';

import MainNavigation from './main-navigation';

import classes from './layout.module.css';
import Footer from './footer';

const montserrat = Montserrat({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <MainNavigation font={montserrat.className} />
      <main className={`${montserrat.className} ${classes.main}`}>
        {children}
      </main>
      <Footer font={montserrat.className} />
    </Fragment>
  );
};

export default Layout;
