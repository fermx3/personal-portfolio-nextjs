import Image from 'next/image';

import classes from './proyecto-imagen.module.css';

const ProyectoImagen = ({ imageUrl, alt, fullCard, priority }) => {
  return (
    <div className={`${classes.imagen} ${fullCard && classes.imgGrande}`}>
      <Image src={imageUrl} alt={alt} fill priority={priority} />
    </div>
  );
};

export default ProyectoImagen;
