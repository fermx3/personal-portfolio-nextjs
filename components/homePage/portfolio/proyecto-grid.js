import ProyectoItem from './proyecto-item';

import classes from './proyecto-grid.module.css';

const ProyectoGrid = ({ proyectos }) => {
  return (
    <div className={classes.grid}>
      {proyectos.map((proyecto) => (
        <ProyectoItem key={proyecto.id} proyecto={proyecto} />
      ))}
    </div>
  );
};

export default ProyectoGrid;
