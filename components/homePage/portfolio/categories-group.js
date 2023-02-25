import Button from '../../ui/button';

import classes from './categories-group.module.css';

const CategoriesGroup = ({ buttons }) => {
  return (
    <div className={classes.categories}>
      {buttons.map((tecnologia) => (
        <Button
          key={tecnologia}
          href={`/portafolio/filtro/${tecnologia}`}
          type='small'
        >
          {tecnologia}
        </Button>
      ))}
    </div>
  );
};

export default CategoriesGroup;
