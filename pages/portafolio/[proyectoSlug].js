import { Fragment } from 'react';
import Head from 'next/head';

import ProyectoItem from '@/components/homePage/portfolio/proyecto-item';

import { getFeaturedSlugs, getProyectoDetails } from '@/helpers/db-utils';
import MetaTags from '@/components/head/meta-tags';

const ProyectoDetallesPage = ({ proyectoData, detalles }) => {
  const metaDesc = proyectoData.desc.markdown.replace(/\*/g, '').slice(0, 160);
  const dinamicTitle = `${proyectoData.titulo} by Webloom`;

  return (
    <Fragment>
      <Head>
        <title>{dinamicTitle}</title>
        <MetaTags
          title={dinamicTitle}
          desc={metaDesc}
          url={`portafolio/${proyectoData.slug}`}
          image={`/images/proyectos/${proyectoData.slug}.png`}
        />
        <meta name='description' content={metaDesc} />
      </Head>
      <ProyectoItem proyecto={proyectoData} detalles={detalles} />
    </Fragment>
  );
};

export default ProyectoDetallesPage;

export const getStaticProps = async (context) => {
  const { proyectoSlug } = context.params;

  const proyectoData = await getProyectoDetails(proyectoSlug);

  if (!proyectoData) {
    return {
      notFound: true,
    };
  }

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
