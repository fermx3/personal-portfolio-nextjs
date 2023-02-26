import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getFilteredProyectos } from '@/helpers/db-utils';

import MetaTags from '@/components/head/meta-tags';
import CardGrid from '@/components/portfolio/card-grid';
import Notificacion from '@/components/ui/notificacion';
import Loader from '@/components/ui/loader';
import Button from '@/components/ui/button';

import classes from '../../../styles/section.module.css';

const FiltroPage = ({ filteredProyectos, tags }) => {
  const [proyectos, setProyectos] = useState(filteredProyectos);
  const [noMoreProyectos, setNoMoreProyectos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    setProyectos(filteredProyectos);
    setNoMoreProyectos(false);
  }, [filteredProyectos]);

  const queryFormated = query.tags.join('/');
  const listOfTags = tags.join(' + ');

  const dinamicTitle = `Proyectos realizados con: ${listOfTags} by Webloom`;
  const tagsForURL = tags.join('/');
  const dinamicURL = `https://www.webloom.com.mx/portafolio/filtro/${tagsForURL}`;

  const handleClick = async () => {
    setNoMoreProyectos(false);
    setIsLoading(true);

    const result = await fetch(
      `/api/more-proyectos/${proyectos.length}/filtered/${queryFormated}`
    );

    const data = await result.json();

    const newProyectos = data.proyectos;

    if (newProyectos.length === 0) {
      setIsLoading(false);
      setNoMoreProyectos(true);
    } else {
      setProyectos([...proyectos, ...newProyectos]);
      setIsLoading(false);
    }
  };

  return (
    <section className={classes.section}>
      <Head>
        <title>{dinamicTitle}</title>
        <MetaTags
          title={dinamicTitle}
          desc='Filtra por tecnologia usada: Nuestros proyectos web utilizan una amplia variedad de tecnologías para satisfacer las necesidades de nuestros clientes. Desde el desarrollo de sitios web personalizados utilizando tecnologías como Next.js y React.js, hasta la integración de plataformas CMS como WordPress.'
          url={dinamicURL}
        />
      </Head>
      <h1>{`Proyectos realizados con: ${listOfTags}`}</h1>
      <CardGrid proyectos={proyectos} />
      {noMoreProyectos && (
        <Notificacion>No hay más proyectos que mostrar.</Notificacion>
      )}
      {isLoading && <Loader />}
      {proyectos.length >= 4 && (
        <Button onClick={handleClick} disabled={isLoading}>
          {isLoading ? 'Cargando proyectos...' : 'Ver más proyectos'}
        </Button>
      )}
    </section>
  );
};

export default FiltroPage;

export const getStaticProps = async (context) => {
  const { tags } = context.params;

  let filteredProyectos;

  try {
    filteredProyectos = await getFilteredProyectos(tags);
  } catch (error) {
    return { notFound: true };
  }

  return {
    props: {
      filteredProyectos,
      tags,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
