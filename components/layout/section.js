import classes from './section.module.css';

const Section = ({ children, id }) => {
  return (
    <section id={id} className={classes.section}>
      {children}
    </section>
  );
};

export default Section;
