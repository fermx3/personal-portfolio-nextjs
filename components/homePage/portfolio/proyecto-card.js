import classes from './proyecto-card.module.css';

const ProyectoCard = ({ children }) => {
  return <article className={classes.card}>{children}</article>;
};

export default ProyectoCard;
