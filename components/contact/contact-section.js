import ContactForm from './contact-form';
import Icon from '../images/icon';

import classes from './contact-section.module.css';

const ContactSection = () => {
  return (
    <section id='contacto' className={classes.contacto}>
      <div className={classes.contactHeader}>
        <h2>Cómo sería tu web ideal?</h2>
        <h3>Cuentame para hacerla realidad.</h3>
      </div>
      <div>
        <a href='mailto:hola@webloom.com.mx'>hola@webloom.com.mx</a>
        <div className={classes.socialIcons}>
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
            <Icon
              src='/images/icons/social-media/github.svg'
              alt='github link'
            />
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
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
