import classes from './portfolio-section.module.css';
import ProyectoGrid from './proyecto-grid';
import Button from '@/components/ui/button';

const PortfolioSection = ({ proyectos }) => {
  return (
    <section id='portafolio' className={classes.portafolio}>
      <h2>Portafolio</h2>
      <ProyectoGrid proyectos={proyectos} />
      <Button href='/portafolio'>Ver más</Button>
    </section>
  );
};

export default PortfolioSection;
