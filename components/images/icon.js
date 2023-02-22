import Image from 'next/image';

import classes from './icons.module.css';

const Icon = ({ src, caption, alt, nivel, whiteOnDarkTheme }) => {
  return (
    <figure
      className={`${classes.icon} ${
        whiteOnDarkTheme && classes.whiteOnDarkTheme
      }`}
    >
      <Image src={src} alt={caption || alt} width={30} height={30} />
      {caption && <figcaption>{caption}</figcaption>}
      {nivel && <p>{nivel}</p>}
    </figure>
  );
};

export default Icon;
