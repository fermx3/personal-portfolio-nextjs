import Head from 'next/head';

import MetaTags from '@/components/head/meta-tags';
import Hero from '@/components/homePage/hero/hero';
import SkillsSection from '@/components/homePage/skills/skills-section';
import PortfolioSection from '@/components/portfolio/portfolio-section';
import BlogSection from '@/components/blog/blog-section';
import ContactSection from '@/components/homePage/contact/contact-section';

import { getAllPosts, getFeaturedProyectos } from '@/helpers/db-utils';

export default function Home({ proyectos, posts }) {
  return (
    <>
      <Head>
        <title>Páginas Web & Marketing | Webloom</title>
        <MetaTags
          title='Páginas Web & Marketing | Webloom'
          desc='Especialista en desarrollo web y optimización de motores de búsqueda (SEO). Ofrezco soluciones personalizadas para ayudar a las empresas a tener una presencia en línea efectiva y visible. Contáctame para obtener más información sobre mis servicios de diseño y desarrollo de sitios web, marketing digital y estrategias de SEO.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      {/* Inyectar aquí navbar con un div en el documento? */}
      <SkillsSection />
      <PortfolioSection proyectos={proyectos} />
      <BlogSection proyectos={posts} />
      <ContactSection />
    </>
  );
}

export const getStaticProps = async () => {
  const featuredProyectos = await getFeaturedProyectos();
  const posts = await getAllPosts();

  return {
    props: {
      proyectos: featuredProyectos,
      posts,
    },
    revalidate: 3600,
  };
};
