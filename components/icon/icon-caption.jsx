import classes from './icon-caption.module.scss';

const IconCaption = ({ children, caption, nivel, whiteOnDarkTheme }) => {
  return (
    <figure
      className={`${classes.icon} ${
        whiteOnDarkTheme && classes.whiteOnDarkTheme
      }`}
    >
      {children}
      {caption && <figcaption>{caption}</figcaption>}
      {nivel && <p>{nivel}</p>}
    </figure>
  );
};

export default IconCaption;
