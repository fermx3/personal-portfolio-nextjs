import Image from 'next/image';
import Icon from '../images/icon';

const Header = () => {
  return (
    <header>
      <div>
        <h1>¡Hola! soy Fernando Rios</h1>
        <h2>Desarrollador Web FullStack</h2>
        <p>
          Soy un desarrollador web full stack especializado en React.js,
          WordPress y SEO, comprometido en crear aplicaciones web dinámicas y
          optimizadas para motores de búsqueda que satisfagan las necesidades de
          mis clientes y usuarios. Mi objetivo es proporcionar soluciones de
          alta calidad y ayudarles a llevar su visión al siguiente nivel en
          línea.
        </p>
        <div>
          <Icon src='/images/icons/languajes/nextjs.svg' caption='next.js' />
          <Icon src='/images/icons/languajes/react.svg' caption='react.js' />
          <Icon
            src='/images/icons/languajes/javascript.svg'
            caption='JavaScript'
          />
          <Icon
            src='/images/icons/languajes/wordpress.svg'
            caption='WordPress'
          />
        </div>
      </div>
      <div>
        <Image
          src='/images/foto-perfil.png'
          alt='Fernando Rios Desarrollador Web'
          width={300}
          height={300}
        />
      </div>
    </header>
  );
};

export default Header;
