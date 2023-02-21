import { useState } from 'react';

import { getAllProyectos } from '@/helpers/db-utils';

import ProyectoGrid from '@/components/homePage/portfolio/proyecto-grid';
import Button from '@/components/ui/button';
import Notificacion from '@/components/ui/notificacion';

import classes from '../../styles/Portafolio.module.css';
import Loader from '@/components/ui/loader';

const Portafolio = (props) => {
  const [proyectos, setProyectos] = useState(props.proyectos);
  const [noMoreProyectos, setNoMoreProyectos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setNoMoreProyectos(false);
    setIsLoading(true);

    const result = await fetch(`/api/more-proyectos/${proyectos.length}`);

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
    <section className={classes.portafolio}>
      <h1>Portafolio</h1>
      <ProyectoGrid proyectos={proyectos} />
      {noMoreProyectos && (
        <Notificacion>No hay más proyectos que mostrar.</Notificacion>
      )}
      {isLoading && <Loader />}
      <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Ver más proyectos'}
      </Button>
    </section>
  );
};

export default Portafolio;

export const getStaticProps = async () => {
  const proyectos = await getAllProyectos();

  return {
    props: {
      proyectos,
    },
  };
};
