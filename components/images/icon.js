import Image from 'next/image';

import classes from './icons.module.css';

const Icon = ({ src, caption, alt, nivel }) => {
  return (
    <figure className={classes.icon}>
      <Image src={src} alt={caption || alt} width={30} height={30} />
      <figcaption>{caption}</figcaption>
      {nivel && <p>{nivel}</p>}
    </figure>
  );
};

export default Icon;
