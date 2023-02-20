import { useState } from 'react';

import { getAllProyectos } from '@/helpers/db-utils';

import ProyectoItem from '@/components/homePage/portfolio/proyecto-item';

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
    <section>
      <h1>Portafolio</h1>
      {proyectos.map((proyecto) => (
        <ProyectoItem key={proyecto.id} proyecto={proyecto} />
      ))}
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
