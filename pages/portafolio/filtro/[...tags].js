import Head from 'next/head';
import { useRouter } from 'next/router';

import { getFilteredProyectos } from '@/helpers/db-utils';

import ProyectoGrid from '@/components/homePage/portfolio/proyecto-grid';

import classes from '../../../styles/section.module.css';
import MetaTags from '@/components/head/meta-tags';

const FiltroPage = ({ filteredProyectos, tags }) => {
  const listOfTags = tags.join(' + ');
  // const { pathname, query } = useRouter();
  // console.log(pathname);
  // console.log(query.tags);

  const dinamicTitle = `Proyectos realizados con: ${listOfTags} by Webloom`;
  const tagsForURL = tags.join('/');
  const dinamicURL = `https://www.webloom.com.mx/portafolio/filtro/${tagsForURL}`;

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
      <ProyectoGrid proyectos={filteredProyectos} />
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
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
