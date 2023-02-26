import classes from './proyecto-card.module.css';

const ProyectoCard = ({ children, fullCard }) => {
  return (
    <article className={`${classes.card} ${fullCard && classes.cardFull}`}>
      {children}
    </article>
  );
};

export default ProyectoCard;
