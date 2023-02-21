import classes from './proyecto-card.module.css';

const ProyectoCard = ({ children, detalles }) => {
  return (
    <article className={`${classes.card} ${detalles && classes.cardFull}`}>
      {children}
    </article>
  );
};

export default ProyectoCard;
