import Image from 'next/image';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import ButtonGroup from '@/components/homePage/portfolio/categories-group';

import classes from './proyecto-item.module.css';
import Icon from '@/components/images/icon';

const ProyectoItem = ({ proyecto }) => {
  const { titulo, subtitulo, tecnologias, slug, desc, github, website } =
    proyecto;

  const extracto = desc.markdown.slice(0, 300) + '...';

  return (
    <article className={classes.proyecto}>
      <div className={classes.imagen}>
        <Image
          src={`/images/proyectos/${slug}.png`}
          alt={titulo}
          height={887 / 3}
          width={1280 / 3}
        />
      </div>
      <div className={classes.detalles}>
        <div className={classes.header}>
          <h3>{titulo}</h3>
          <h4>{subtitulo}</h4>
        </div>
        <ButtonGroup buttons={tecnologias} />
        <div className={classes.contenido}>
          <ReactMarkdown>{extracto}</ReactMarkdown>
        </div>
        <div className={classes.links}>
          <Link href={`/portafolio/${slug}`}>Leer más...</Link>
          <div className={classes.icons}>
            {github && (
              <a href={github} target='_blank' rel='noreferrer noopener'>
                <Icon
                  src='/images/icons/social-media/github.svg'
                  alt={`${titulo} github link`}
                />
              </a>
            )}
            <a href={website} target='_blank' rel='noreferrer noopener'>
              <Icon
                src='/images/icons/social-media/website.svg'
                alt={`${titulo} website link`}
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProyectoItem;
