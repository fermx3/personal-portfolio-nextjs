import Image from 'next/image';
import Link from 'next/link';
import Icon from '../images/icon';
import Button from '../ui/button';

import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.profile}>
        <div className={classes.title}>
          <h1>¡Hola! soy Fernando Rios</h1>
          <h2>Desarrollador Web FullStack</h2>
        </div>
        <p>
          Soy un desarrollador web full stack especializado en React.js,
          WordPress y SEO, comprometido en crear aplicaciones web dinámicas y
          optimizadas para motores de búsqueda que satisfagan las necesidades de
          mis clientes y usuarios. Mi objetivo es proporcionar soluciones de
          alta calidad y ayudarles a llevar su visión al siguiente nivel en
          línea.
        </p>
        <div className={classes.icons}>
          <Icon
            src='/images/icons/languajes/nextjs.svg'
            caption='next.js'
            nivel='Intermedio'
          />
          <Icon
            src='/images/icons/languajes/react.svg'
            caption='react.js'
            nivel='Intermedio'
          />
          <Icon
            src='/images/icons/languajes/javascript.svg'
            caption='JavaScript'
            nivel='Avanzado'
          />
          <Icon
            src='/images/icons/languajes/wordpress.svg'
            caption='WordPress'
            nivel='Avanzado'
          />
        </div>
        <Button href='/#portafolio'>Explora mi trabajo</Button>
      </div>
      <div className={classes.profileImage}>
        <div className={classes.blob}></div>
        <Image
          src='/images/foto-perfil.png'
          alt='Fernando Rios Desarrollador Web'
          width={300}
          height={300}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
