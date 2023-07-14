import ProyectoItem from './proyecto-item';

import classes from './card-grid.module.css';

const CardsGrid = ({ proyectos, query }) => {
  return (
    <div className={classes.grid}>
      {proyectos.map((proyecto) => (
        <ProyectoItem key={proyecto.id} proyecto={proyecto} query={query} />
      ))}
    </div>
  );
};

export default CardsGrid;
