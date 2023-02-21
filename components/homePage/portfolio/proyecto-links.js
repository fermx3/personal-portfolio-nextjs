import Link from 'next/link';

import Icon from '@/components/images/icon';
import Button from '@/components/ui/button';

import classes from './proyecto-links.module.css';

const ProyectoLinks = ({ slug, github, website, titulo, detalles }) => {
  return (
    <div className={`${classes.links} ${detalles && classes.linksOnDetail}`}>
      {!detalles && <Link href={`/portafolio/${slug}`}>Leer más...</Link>}
      <div className={classes.icons}>
        {github && (
          <a href={github} target='_blank' rel='noreferrer noopener'>
            <Icon
              src='/images/icons/social-media/github.svg'
              alt={`${titulo} github link`}
            />
          </a>
        )}
        {detalles ? (
          <Button href={website} openInAnotherTab>
            Ir a la web
          </Button>
        ) : (
          <a href={website} target='_blank' rel='noreferrer noopener'>
            <Icon
              src='/images/icons/social-media/website.svg'
              alt={`${titulo} website link`}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProyectoLinks;
