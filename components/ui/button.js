import Link from 'next/link';

import classes from './button.module.css';

const Button = ({ href, children, type }) => {
  const { button, small } = classes;

  return (
    <Link href={href} className={`${button} ${type === 'small' && small}`}>
      {children}
    </Link>
  );
};

export default Button;
