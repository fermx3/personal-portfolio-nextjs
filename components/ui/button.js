import Link from 'next/link';

import classes from './button.module.css';

const Button = ({ href, children, type, onClick }) => {
  const { button, small } = classes;

  if (href) {
    return (
      <Link href={href} className={`${button} ${type === 'small' && small}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${button} ${type === 'small' && small}`}
    >
      {children}
    </button>
  );
};

export default Button;
