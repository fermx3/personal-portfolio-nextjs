import classes from './portfolio-section.module.css';
import CardGrid from './card-grid';
import Button from '@/components/ui/button';

const PortfolioSection = ({ proyectos }) => {
  return (
    <section id='portafolio' className={classes.portafolio}>
      <h2>Portafolio</h2>
      <CardGrid proyectos={proyectos} />
      <Button href='/portafolio'>Ver más</Button>
    </section>
  );
};

export default PortfolioSection;
