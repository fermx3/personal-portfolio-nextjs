import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import ButtonGroup from '@/components/portfolio/categories-group';
import ProyectoCard from '@/components/card/proyecto-card';
import ProyectoLinks from './proyecto-links';
import ProyectoImagen from './proyecto-imagen';

import classes from './proyecto-item.module.css';

const ProyectoItem = ({ proyecto, fullCard, query }) => {
  const {
    titulo,
    subtitulo,
    tecnologias,
    slug,
    desc,
    github,
    website,
    featuredImage,
    createdAt,
  } = proyecto;

  let descripcion = desc.markdown;
  let imageUrl;
  let date;

  if (featuredImage) {
    imageUrl = featuredImage.url;
  } else {
    imageUrl = `/images/proyectos/${slug}.png`;
  }

  if (!fullCard) {
    descripcion = desc.markdown.slice(0, 300) + '...';
  }

  if (createdAt) {
    date = new Date(createdAt).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  console.log(imageUrl);

  return (
    <ProyectoCard fullCard={fullCard}>
      {/* <Link href={website ? `/portafolio/${slug}` : `/blog/${slug}`}> */}
      <ProyectoImagen
        imageUrl={imageUrl}
        alt={titulo}
        fullCard={fullCard}
        priority={fullCard}
      />
      {/* </Link> */}
      <div
        className={`${classes.contenido} ${fullCard && classes.contenidoFull}`}
      >
        <header className={classes.header}>
          <Link href={website ? `/portafolio/${slug}` : `/blog/${slug}`}>
            <h3>{titulo}</h3>
            {subtitulo && <h4>{subtitulo}</h4>}
            {createdAt && <p>{date}</p>}
          </Link>
        </header>
        {tecnologias && <ButtonGroup buttons={tecnologias} query={query} />}
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
