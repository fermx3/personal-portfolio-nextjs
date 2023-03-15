import ContactForm from './contact-form';

import classes from './contact-section.module.css';
import Button from '@/components/ui/button';
import SocialIcons from './social-icons';
import Section from '@/components/layout/section';

const ContactSection = () => {
  return (
    <Section id='contacto' className={classes.contacto}>
      <div className={classes.contactHeader}>
        <h2>Cómo sería tu web ideal?</h2>
        <h3>Cuentame para hacerla realidad.</h3>
      </div>
      <div className={classes.links}>
        <Button href='mailto:hola@webloom.com.mx' type='link'>
          hola@webloom.com.mx
        </Button>
        <SocialIcons whiteOnDarkTheme />
      </div>
      <ContactForm />
    </Section>
  );
};

export default ContactSection;
