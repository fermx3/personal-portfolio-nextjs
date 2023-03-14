import Image from 'next/image';

import classes from './icon.module.css';

const Icon = ({ src, alt, caption, nivel, whiteOnDarkTheme }) => {
  if (!caption) {
    return (
      <div
        className={`${classes.icon} ${
          whiteOnDarkTheme && classes.whiteOnDarkTheme
        }`}
      >
        <Image src={src} alt={alt} width={30} height={30} />
      </div>
    );
  }

  return (
    <figure
      className={`${classes.icon} ${
        whiteOnDarkTheme && classes.whiteOnDarkTheme
      }`}
    >
      <Image src={src} alt={caption} width={30} height={30} />
      <figcaption>{caption}</figcaption>
      <p>{nivel}</p>
    </figure>
  );
};

export default Icon;
