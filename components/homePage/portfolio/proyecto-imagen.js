import Image from 'next/image';

import classes from './proyecto-imagen.module.css';

const ProyectoImagen = ({ slug, alt, detalles }) => {
  return (
    <div className={`${classes.imagen} ${detalles && classes.imgGrande}`}>
      <Image src={`/images/proyectos/${slug}.png`} alt={alt} fill />
    </div>
  );
};

export default ProyectoImagen;
