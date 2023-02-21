import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import ButtonGroup from '@/components/homePage/portfolio/categories-group';
import ProyectoCard from './proyecto-card';

import classes from './proyecto-item.module.css';
import ProyectoImagen from './proyecto-imagen';
import ProyectoLinks from './proyecto-links';

const ProyectoItem = ({ proyecto, detalles }) => {
  const { titulo, subtitulo, tecnologias, slug, desc, github, website } =
    proyecto;

  let descripcion = desc.markdown;

  if (!detalles) {
    descripcion = desc.markdown.slice(0, 300) + '...';
  }

  return (
    <ProyectoCard>
      <ProyectoImagen slug={slug} alt={titulo} detalles={detalles} />
      <div
        className={`${classes.contenido} ${detalles && classes.contenidoFull}`}
      >
        <header className={classes.header}>
          <h3>{titulo}</h3>
          <h4>{subtitulo}</h4>
        </header>
        <ButtonGroup buttons={tecnologias} />
        <div className={classes.descripcion}>
          <ReactMarkdown>{descripcion}</ReactMarkdown>
        </div>
        <ProyectoLinks
          slug={slug}
          github={github}
          website={website}
          titulo={titulo}
          detalles={detalles}
        />
      </div>
    </ProyectoCard>
  );
};

export default ProyectoItem;
