import Icon from '@/components/images/icon';

import classes from './social-icons.module.css';

const SocialIcons = ({ whiteOnDarkTheme }) => {
  return (
    <div
      className={`${classes.socialIcons} ${
        whiteOnDarkTheme && classes.whiteOnDarkTheme
      }`}
    >
      <a
        href='https://www.facebook.com/webloom.disenoweb'
        target='_blank'
        rel='noreferrer noopener'
      >
        <Icon
          src='/images/icons/social-media/facebook.svg'
          alt='facebook link'
        />
      </a>
      <a
        href='https://github.com/fermx3/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <Icon src='/images/icons/social-media/github.svg' alt='github link' />
      </a>
      <a
        href='https://www.linkedin.com/in/fernando-rios-alc%C3%A1ntara-4230a99a/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <Icon
          src='/images/icons/social-media/linkedin.svg'
          alt='linkedIn link'
        />
      </a>
      <a
        href='https://www.instagram.com/fer.rialc/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <Icon
          src='/images/icons/social-media/instagram.svg'
          alt='instagram link'
        />
      </a>
    </div>
  );
};

export default SocialIcons;
