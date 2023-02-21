import ProyectoItem from '@/components/homePage/portfolio/proyecto-item';

import { getFeaturedSlugs, getProyectoDetails } from '@/helpers/db-utils';

const ProyectoDetallesPage = ({ proyectoData, detalles }) => {
  return <ProyectoItem proyecto={proyectoData} detalles={detalles} />;
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

//primer tatuaje, blog de cuidados posteriores a tatuaje, estilos de tatuaje, que hacer o como cotizar tatuaje zona medida a color b&n
//contador de visitas al mes
//7 fuegos calendario champions
//arbol de la 10 deportes
