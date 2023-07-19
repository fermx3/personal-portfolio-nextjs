import Image from 'next/image';

import classes from '../styles/404.module.css';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className={classes.mainContainer}>
      <div>
        <Image
          src='/images/site/404-dog.png'
          width={300}
          height={300}
          alt='404 dog'
        ></Image>
      </div>
      <div>
        <h1>404</h1>
        <p>Uy, que pena. ¿Dondé habrá quedado esta página?</p>
        <Link href='/'>Ir al inicio</Link>
      </div>
    </div>
  );
};

export default Custom404;
