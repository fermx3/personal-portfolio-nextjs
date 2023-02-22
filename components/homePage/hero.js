import Image from 'next/image';
import Icon from '../images/icon';
import Button from '../ui/button';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <header className={classes.hero}>
      <div className={classes.profile}>
        <div className={classes.title}>
          <h1>¡Hola! soy Fernando Rios</h1>
          <h2>Desarrollador Web FrontEnd</h2>
        </div>
        <p>
          Soy un desarrollador web front end especializado en React.js,
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
            whiteOnDarkTheme
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

export default Hero;
