import Head from 'next/head';

import Header from '@/components/homePage/header';
import styles from '@/styles/Home.module.css';
import SkillsSection from '@/components/homePage/skills-section';
import PortfolioSection from '@/components/homePage/portfolio-section';

export default function Home() {
  return (
    <>
      <Head>
        <title>Páginas Web & Marketing | Webloom</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <SkillsSection />
      <PortfolioSection />
      {/* Inyectar aquí navbar con un div en el documento? */}
      {/* <h2>Contacto: Cómo sería tu web ideal?</h2> */}
    </>
  );
}
