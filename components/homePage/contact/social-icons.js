import Icon from '@/components/icon/icon';

import classes from './social-icons.module.css';

const SocialIcons = ({ whiteOnDarkTheme }) => {
  const socialLinks = [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/webloom.disenoweb',
    },
    {
      name: 'github',
      href: 'https://github.com/fermx3/',
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/fernando-rios-alc%C3%A1ntara-4230a99a/',
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/FerAlcantara_',
    },
  ];

  return (
    <div
      className={`${classes.socialIcons} ${
        whiteOnDarkTheme && classes.whiteOnDarkTheme
      }`}
    >
      {socialLinks.map(({ name, href }) => (
        <a key={name} href={href} target='_blank' rel='noreferrer noopener'>
          <Icon
            src={`/images/icons/social-media/${name}.svg`}
            alt={`${name} link`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
