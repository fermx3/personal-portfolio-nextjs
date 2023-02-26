import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import ButtonGroup from '@/components/portfolio/categories-group';
import ProyectoCard from '@/components/card/proyecto-card';

import classes from './proyecto-item.module.css';
import ProyectoImagen from './proyecto-imagen';
import ProyectoLinks from './proyecto-links';

const ProyectoItem = ({ proyecto, fullCard }) => {
  const {
    titulo,
    subtitulo,
    tecnologias,
    slug,
    desc,
    github,
    website,
    featuredImage,
  } = proyecto;

  let descripcion = desc.markdown;
  let imageUrl;

  if (featuredImage) {
    imageUrl = featuredImage.url;
  } else {
    imageUrl = `/images/proyectos/${slug}.png`;
  }

  if (!fullCard) {
    descripcion = desc.markdown.slice(0, 300) + '...';
  }

  return (
    <ProyectoCard fullCard={fullCard}>
      <ProyectoImagen
        imageUrl={imageUrl}
        alt={titulo}
        fullCard={fullCard}
        priority={fullCard}
      />
      <div
        className={`${classes.contenido} ${fullCard && classes.contenidoFull}`}
      >
        <header className={classes.header}>
          <Link href={website ? `/portafolio/${slug}` : `/blog/${slug}`}>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
          </Link>
        </header>
        {tecnologias && <ButtonGroup buttons={tecnologias} />}
        <div className={classes.descripcion}>
          <ReactMarkdown>{descripcion}</ReactMarkdown>
        </div>
        <ProyectoLinks
          slug={slug}
          github={github}
          website={website}
          titulo={titulo}
          fullCard={fullCard}
        />
      </div>
    </ProyectoCard>
  );
};

export default ProyectoItem;
