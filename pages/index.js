import Head from 'next/head';

import Header from '@/components/homePage/header';
import SkillsSection from '@/components/homePage/skills/skills-section';
import PortfolioSection from '@/components/homePage/portfolio/portfolio-section';
import ContactSection from '@/components/homePage/contact/contact-section';
import { getFeaturedProyectos } from '@/helpers/db-utils';

export default function Home({ proyectos }) {
  return (
    <>
      <Head>
        <title>Páginas Web & Marketing | Webloom</title>
        <meta
          name='description'
          content='Especialista en desarrollo web y optimización de motores de búsqueda (SEO). Ofrezco soluciones personalizadas para ayudar a las empresas a tener una presencia en línea efectiva y visible. Contáctame para obtener más información sobre mis servicios de diseño y desarrollo de sitios web, marketing digital y estrategias de SEO.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {/* Inyectar aquí navbar con un div en el documento? */}
      <SkillsSection />
      <PortfolioSection proyectos={proyectos} />
      <ContactSection />
    </>
  );
}

export const getStaticProps = async () => {
  const featuredProyectos = await getFeaturedProyectos();

  return {
    props: {
      proyectos: featuredProyectos,
    },
  };
};
