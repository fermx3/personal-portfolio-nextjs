import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import ButtonGroup from '@/components/homePage/portfolio/categories-group';
import Button from '@/components/ui/button';

import classes from './proyecto-item.module.css';
import Icon from '@/components/images/icon';

const ProyectoItem = ({ proyecto }) => {
  const { titulo, subtitulo, tecnologias, img, desc } = proyecto;

  const extracto = desc.markdown.slice(0, 300) + '...';

  return (
    <article className={classes.proyecto}>
      <div>
        <Image
          src={`/images/proyectos/${img}.jpg`}
          alt={titulo}
          height={250}
          width={480}
        />
      </div>
      <div className={classes.detalles}>
        <div className={classes.header}>
          <h3>{titulo}</h3>
          <h4>{subtitulo}</h4>
        </div>
        <ButtonGroup buttons={tecnologias} />
        <div className={classes.contenido}>
          {desc && (
            <ReactMarkdown unwrapDisallowed={true}>{extracto}</ReactMarkdown>
          )}
        </div>
        <div className={classes.links}>
          <a href='#'>Leer más...</a>
          <div className={classes.icons}>
            <Icon
              src='/images/icons/social-media/github.svg'
              alt={`${titulo} github link`}
            />
            <Icon
              src='/images/icons/social-media/website.svg'
              alt={`${titulo} website link`}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProyectoItem;
