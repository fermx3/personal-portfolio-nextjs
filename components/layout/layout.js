import { Fragment } from 'react';
import { Montserrat } from '@next/font/google';

import MainNavigation from './main-navigation';

import classes from './layout.module.css';

const montserrat = Montserrat({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation font={montserrat.className} />
      <main className={`${montserrat.className} ${classes.main}`}>
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
