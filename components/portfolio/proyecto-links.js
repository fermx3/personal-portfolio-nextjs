import Link from 'next/link';

import Icon from '@/components/icon/icon';
import Button from '@/components/ui/button';

import classes from './proyecto-links.module.css';

const ProyectoLinks = ({ slug, github, website, titulo, fullCard }) => {
  return (
    <div className={`${classes.links} ${fullCard && classes.linksOnDetail}`}>
      {!fullCard && (
        <Link href={website ? `/portafolio/${slug}` : `/blog/${slug}`}>
          Leer más...
        </Link>
      )}
      <div className={classes.icons}>
        {github && (
          <a href={github} target='_blank' rel='noreferrer noopener'>
            <Icon
              src='/images/icons/social-media/github.svg'
              alt={`${titulo} github link`}
              whiteOnDarkTheme
            />
          </a>
        )}
        {website &&
          (fullCard ? (
            <Button href={website} openInAnotherTab>
              Ir a la web
            </Button>
          ) : (
            <a href={website} target='_blank' rel='noreferrer noopener'>
              <Icon
                src='/images/icons/social-media/website.svg'
                alt={`${titulo} website link`}
                whiteOnDarkTheme
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default ProyectoLinks;
