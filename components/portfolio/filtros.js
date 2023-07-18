import CategoriesGroup from './categories-group';

import classes from './filtros.module.css';

const Filtros = ({ tecnologias, query }) => {
  return (
    <div className={classes.filtros}>
      <h4>Filtrar proyectos:</h4>
      <CategoriesGroup buttons={tecnologias} query={query} />
    </div>
  );
};

export default Filtros;
