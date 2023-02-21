import { useState } from 'react';

import Button from '../ui/button';

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

    if (!response.ok) {
      setFormFeedback({
        message: 'Something went wrong. Please try again!',
        status: 'error',
      });
      setIsLoading(false);
      return;
    }

    const data = await response.json();

    setEmail('');
    setNombre('');
    setMensaje('');
    setFormFeedback({ message: 'Mensaje enviado!', status: 'success' });
    setIsLoading(false);
  };

  return (
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
        <Button disabled={isLoading} className={classes.submit}>
          Enviar
        </Button>
        {isLoading && 'Enviando mensaje...'}
        {formFeedback && (
          <p>
            <span>{formFeedback.status}</span>
            <span>{formFeedback.message}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
