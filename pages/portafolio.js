import { useState } from 'react';

import { getAllProyectos } from '@/helpers/db-utils';

import ProyectoGrid from '@/components/homePage/portfolio/proyecto-grid';

import classes from '../styles/Portafolio.module.css';

const Portafolio = (props) => {
  const [proyectos, setProyectos] = useState(props.proyectos);

  const handleClick = async () => {
    const result = await fetch(`/api/more-proyectos/${proyectos.length}`);

    const data = await result.json();

    const newProyectos = data.proyectos;

    if (newProyectos.length === 0) {
      console.log('There are no more proyectos to load'); //Make a visual warning
    }

    setProyectos([...proyectos, ...newProyectos]);
  };

  return (
    <section className={classes.portafolio}>
      <h1>Portafolio</h1>
      <ProyectoGrid proyectos={proyectos} />
      <button onClick={handleClick}>Ver más proyectos</button>
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
