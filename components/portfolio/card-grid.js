import ProyectoItem from './proyecto-item';

import classes from './card-grid.module.css';

const CardsGrid = ({ proyectos }) => {
  return (
    <div className={classes.grid}>
      {proyectos.map((proyecto) => (
        <ProyectoItem key={proyecto.id} proyecto={proyecto} />
      ))}
    </div>
  );
};

export default CardsGrid;
