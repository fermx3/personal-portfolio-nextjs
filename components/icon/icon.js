import Image from 'next/image';

import classes from './icon.module.css';

export const ICON_SIZE_CLASSES = {
  base: 'base',
  small: 'small',
};

const getIconSize = (iconSize = ICON_SIZE_CLASSES.base) =>
  ({
    [ICON_SIZE_CLASSES.base]: 30,
    [ICON_SIZE_CLASSES.small]: 25,
  }[iconSize]);

const Icon = ({ src, alt, iconSize, whiteOnDarkTheme }) => {
  return (
    <div
      className={`${classes.icon} ${
        whiteOnDarkTheme && classes.whiteOnDarkTheme
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={getIconSize(iconSize)}
        height={getIconSize(iconSize)}
      />
    </div>
  );
};

export default Icon;
