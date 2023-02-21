import Link from 'next/link';

import classes from './button.module.css';

const Button = ({
  href,
  children,
  disabled,
  type,
  onClick,
  openInAnotherTab,
}) => {
  const { button, disabledStyle } = classes;

  if (href) {
    return (
      <Link
        href={href}
        className={`${button} ${classes[type]}`}
        target={openInAnotherTab ? '_blank' : '_self'}
        rel={openInAnotherTab && 'noreferrer noopener'}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${button} ${classes[type]} ${disabled && disabledStyle}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
