import Image from 'next/image';

import classes from './icons.module.css';

export const ICON_SIZE_CLASSES = {
  base: 'base',
  small: 'small',
};

const getIconSize = (iconSize = ICON_SIZE_CLASSES.base) =>
  ({
    [ICON_SIZE_CLASSES.base]: 30,
    [ICON_SIZE_CLASSES.small]: 15,
  }[iconSize]);

const Icon = ({ src, alt, iconSize }) => {
  <Image
    src={src}
    alt={alt}
    width={getIconSize(iconSize)}
    height={getIconSize(iconSize)}
  />;
};

export default Icon;
