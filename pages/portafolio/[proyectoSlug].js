import { Fragment } from 'react';
import Head from 'next/head';

import ProyectoItem from '@/components/homePage/portfolio/proyecto-item';

import { getFeaturedSlugs, getProyectoDetails } from '@/helpers/db-utils';

const ProyectoDetallesPage = ({ proyectoData, detalles }) => {
  const metaDesc = proyectoData.desc.markdown.replace(/\*/g, '').slice(0, 160);

  return (
    <Fragment>
      <Head>
        <title>{proyectoData.titulo} by Webloom</title>
        <meta name='description' content={metaDesc} />
      </Head>
      <ProyectoItem proyecto={proyectoData} detalles={detalles} />;
    </Fragment>
  );
};

export default ProyectoDetallesPage;

export const getStaticProps = async (context) => {
  const { proyectoSlug } = context.params;

  const proyectoData = await getProyectoDetails(proyectoSlug);

  return {
    props: {
      proyectoData,
      detalles: true,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  const featuredSlugs = await getFeaturedSlugs();

  return {
    paths: featuredSlugs.map((proyecto) => ({
      params: { proyectoSlug: proyecto.slug },
    })),
    fallback: 'blocking',
  };
};
