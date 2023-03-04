import FormNotification from '@/components/ui/form-notification';
import Loader from '@/components/ui/loader';
import { Fragment, useState } from 'react';

import Button from '../../ui/button';

import classes from './contact-form.module.css';

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formFeedback, setFormFeedback] = useState();

  //Agregar useEffect para quitar notificaciones despues de 5 seg

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormFeedback();
    setIsLoading(true);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ nombre, email, mensaje }),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setFormFeedback({
        message: data.message || 'Algo salió mal. Por favor intenta de nuevo!',
        status: 'error',
      });
      setIsLoading(false);
      return;
    }

    setEmail('');
    setNombre('');
    setMensaje('');
    setFormFeedback({
      message: data.message || 'Mensaje enviado!',
      status: 'success',
    });
    setIsLoading(false);
  };

  return (
    <Fragment>
      <div className={classes.card}>
        <h3>Mándame un mensaje:</h3>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.inputGroup}>
            <div className={classes.nombre}>
              <label htmlFor='nombre' hidden>
                Nombre:
              </label>
              <input
                type='text'
                id='nombre'
                placeholder='Nombre'
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                required
              />
            </div>
            <div className={classes.email}>
              <label htmlFor='email' hidden>
                e-mail:
              </label>
              <input
                type='email'
                id='email'
                placeholder='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className={classes.mensaje}>
            <label htmlFor='mensaje' hidden>
              Mensaje:
            </label>
            <textarea
              id='mensaje'
              placeholder='Mensaje'
              value={mensaje}
              onChange={(e) => {
                setMensaje(e.target.value);
              }}
              required
            ></textarea>
          </div>
          <div className={classes.submit}>
            {isLoading && <Loader />}
            <Button disabled={isLoading}>
              {isLoading ? 'Enviando mensaje...' : 'Enviar'}
            </Button>
          </div>
        </form>
      </div>
      {formFeedback && (
        <FormNotification
          message={formFeedback.message}
          status={formFeedback.status}
        />
      )}
    </Fragment>
  );
};

export default ContactForm;
