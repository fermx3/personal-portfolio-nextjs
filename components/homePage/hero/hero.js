import IconCaption from '@/components/icon/icon-caption';
import Image from 'next/image';
import Icon from '../../icon/icon';
import Button from '../../ui/button';

import classes from './hero.module.css';

const skills = [
  {
    icon: '/images/icons/languajes/nextjs.svg',
    name: 'next.js',
    level: 'Intermedio',
    whiteOnDarkTheme: true,
  },
  {
    icon: '/images/icons/languajes/react.svg',
    name: 'react.js',
    level: 'Intermedio',
  },
  {
    icon: '/images/icons/languajes/javascript.svg',
    name: 'JavaScript',
    level: 'Avanzado',
  },
  {
    icon: '/images/icons/languajes/wordpress.svg',
    name: 'WordPress',
    level: 'Avanzado',
  },
];

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
          {skills.map((skill) => (
            <IconCaption
              key={skill.name}
              caption={skill.name}
              nivel={skill.level}
            >
              <Icon
                src={skill.icon}
                alt={skill.name}
                whiteOnDarkTheme={skill.whiteOnDarkTheme}
              />
            </IconCaption>
          ))}
        </div>
        <Button href='/#portafolio'>Explora mi trabajo</Button>
      </div>
      <div className={classes.profileImage}>
        <div className={classes.blob}></div>
        <Image
          src='/images/site/foto-perfil.png'
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
