import Head from 'next/head';

import Hero from '@/components/homePage/hero';
import SkillsSection from '@/components/homePage/skills/skills-section';
import PortfolioSection from '@/components/homePage/portfolio/portfolio-section';
import ContactSection from '@/components/homePage/contact/contact-section';
import { getFeaturedProyectos } from '@/helpers/db-utils';

export default function Home({ proyectos }) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Páginas Web & Marketing | Webloom</title>
        <meta name='title' content='Páginas Web & Marketing | Webloom' />
        <meta
          name='description'
          content='Especialista en desarrollo web y optimización de motores de búsqueda (SEO). Ofrezco soluciones personalizadas para ayudar a las empresas a tener una presencia en línea efectiva y visible. Contáctame para obtener más información sobre mis servicios de diseño y desarrollo de sitios web, marketing digital y estrategias de SEO.'
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.webloom.com.mx/' />
        <meta property='og:title' content='Páginas Web & Marketing | Webloom' />
        <meta
          property='og:description'
          content='Especialista en desarrollo web y optimización de motores de búsqueda (SEO). Ofrezco soluciones personalizadas para ayudar a las empresas a tener una presencia en línea efectiva y visible. Contáctame para obtener más información sobre mis servicios de diseño y desarrollo de sitios web, marketing digital y estrategias de SEO.'
        />
        <meta property='og:image' content='/images/portada.jpg' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.webloom.com.mx/' />
        <meta
          property='twitter:title'
          content='Páginas Web & Marketing | Webloom'
        />
        <meta
          property='twitter:description'
          content='Especialista en desarrollo web y optimización de motores de búsqueda (SEO). Ofrezco soluciones personalizadas para ayudar a las empresas a tener una presencia en línea efectiva y visible. Contáctame para obtener más información sobre mis servicios de diseño y desarrollo de sitios web, marketing digital y estrategias de SEO.'
        />
        <meta property='twitter:image' content='/images/portada.jpg'></meta>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
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
    revalidate: 3600,
  };
};
