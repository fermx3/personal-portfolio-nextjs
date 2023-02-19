import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='nombre'>Nombre:</label>
        <input
          type='text'
          id='nombre'
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label htmlFor='email'>e-mail:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label htmlFor='mensaje'>Mensaje:</label>
        <textarea
          id='mensaje'
          value={mensaje}
          onChange={(e) => {
            setMensaje(e.target.value);
          }}
          required
        ></textarea>
      </div>
      <button disabled={isLoading}>Enviar</button>
      {isLoading && 'Enviando mensaje...'}
      {formFeedback && (
        <p>
          <span>{formFeedback.status}</span>
          <span>{formFeedback.message}</span>
        </p>
      )}
    </form>
  );
};

export default ContactForm;
