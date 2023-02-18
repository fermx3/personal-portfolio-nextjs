import ContactForm from '../contact/contact-form';
import Icon from '../images/icon';

const ContactSection = () => {
  return (
    <section>
      <h2>Cómo sería tu web ideal?</h2>
      <h3>Cuentame para hacerla realidad.</h3>
      <div>
        <a href='mailto:hola@webloom.com.mx'>hola@webloom.com.mx</a>
        <div>
          <Icon
            src='/images/icons/social-media/facebook.svg'
            alt='facebook link'
          />
          <Icon src='/images/icons/social-media/github.svg' alt='github link' />
          <Icon
            src='/images/icons/social-media/linkedin.svg'
            alt='linkedIn link'
          />
          <Icon
            src='/images/icons/social-media/instagram.svg'
            alt='instagram link'
          />
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
