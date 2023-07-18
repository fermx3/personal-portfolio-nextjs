import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getAllProyectos, getTecnologias } from '@/helpers/db-utils';

import CardGrid from '@/components/portfolio/card-grid';
import Button from '@/components/ui/button';
import Notificacion from '@/components/ui/notificacion';
import Loader from '@/components/ui/loader';
import MetaTags from '@/components/head/meta-tags';

import classes from '../../styles/section.module.css';
import Filtros from '@/components/portfolio/filtros';

const Portafolio = (props) => {
  const [proyectos, setProyectos] = useState(props.proyectos);
  const [noMoreProyectos, setNoMoreProyectos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { pathname } = useRouter();

  //Refactor this to React Context? as is used in [...tags].js too
  const handleClick = async () => {
    setNoMoreProyectos(false);
    setIsLoading(true);

    const result = await fetch(
      `/api/more-proyectos/${proyectos.length}/${pathname}`
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
  //

  return (
    <section
      className={classes.section}
      style={{ display: 'flex', 'flex-direction': 'column' }}
    >
      <Head>
        <title>Portafolio de proyectos web | Webloom</title>
        <MetaTags
          title='Portafolio de proyectos web | Webloom'
          desc='Explora mi portafolio de proyectos web. He desarrollado sitios web personalizados para una amplia variedad de clientes, de pymes. Mi enfoque en el diseño y la funcionalidad garantiza que cada sitio web sea atractivo y fácil de usar para los visitantes. Obtén inspiración para tu próximo proyecto web y contáctame para saber cómo puedo ayudarte a alcanzar tus objetivos en línea.'
          url='portafolio'
        />
      </Head>
      <h1>Portafolio</h1>
      <Filtros tecnologias={props.tecnologias} />
      <CardGrid proyectos={proyectos} />
      {noMoreProyectos && (
        <Notificacion>No hay más proyectos que mostrar.</Notificacion>
      )}
      {isLoading && <Loader />}
      <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Cargando proyectos...' : 'Ver más proyectos'}
      </Button>
    </section>
  );
};

export default Portafolio;

export const getStaticProps = async () => {
  const proyectos = await getAllProyectos();
  const tecnologias = await getTecnologias();

  return {
    props: {
      proyectos,
      tecnologias,
    },
    revalidate: 3600,
  };
};
