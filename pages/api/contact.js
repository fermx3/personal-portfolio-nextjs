export default function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const { nombre, email, mensaje } = req.body;

  if (
    !nombre ||
    nombre.trim() === '' ||
    !email ||
    email.trim() === '' ||
    !email.includes('@') ||
    !mensaje ||
    mensaje.trim() === ''
  ) {
    res
      .status(422)
      .json({ message: 'Entrada invalida. Por favor intenta de nuevo.' });
    return;
  }

  async function main() {
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'mail.webloom.com.mx',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: true,
    });

    const mailData = {
      from: 'contacto@webloom.com.mx',
      to: 'fer.riosalcantara@gmail.com',
      subject: `Mensaje de ${nombre} para Webloom`,
      text: mensaje,
      html: `<div>${mensaje}</div><p>Enviado de:
      ${email}</p>`,
    };

    const info = await transporter.sendMail(mailData);
    // console.log(info);

    res.status(200).json({ message: `Mensaje enviado!` });
  }

  main().catch((error) => res.status(500).json(error.message));
}
