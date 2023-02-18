const ContactForm = () => {
  return (
    <form>
      <div>
        <label htmlFor='nombre'>Nombre:</label>
        <input type='text' id='nombre' />
      </div>
      <div>
        <label htmlFor='email'>e-mail:</label>
        <input type='email' id='email' />
      </div>
      <div>
        <label htmlFor='mensaje'>Mensaje:</label>
        <textarea id='mensaje'></textarea>
      </div>
      <button>Enviar</button>
    </form>
  );
};

export default ContactForm;
