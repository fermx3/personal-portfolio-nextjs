import classes from './notificacion.module.css';

const Notificacion = ({ children }) => {
  return <div className={classes.notificacion}>{children}</div>;
};

export default Notificacion;
