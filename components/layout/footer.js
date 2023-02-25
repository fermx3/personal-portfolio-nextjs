import Image from 'next/image';

import SocialIcons from '../homePage/contact/social-icons';
import classes from './footer.module.css';

const year = new Date().getFullYear();

const Footer = ({ font }) => {
  return (
    <footer className={`${font} ${classes.footer}`}>
      <div>
        {`${year} © Fernando Rios | Webloom. Todos los derechos reservados.`}
      </div>
      <div>
        <Image
          src='/images/site/logo.png'
          alt='webloom logo'
          height={284 / 20}
          width={1752 / 20}
        />
      </div>
      <div className={classes.social}>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
