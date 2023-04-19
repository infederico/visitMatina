const nodeMailer = require('nodemailer');

/*crea el objeto trasportador usando createTransport 
y le pasamos un objeto con las opciones de configuracion*/
const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'comercioenlineafree@gmail.com',
        pass: 'whwiwrsfoswmedcl',
    },
});


// Función para enviar correos electrónicos
const enviarCorreo = (req, res) => {

const { name, correoxres, mensaje } = req.body;
  const destinatario = 'victorbellasartes@gmail.com'
  const asunto = 'Contacto desde la web'

    // Configurar el objeto mailOptions con los detalles del correo electrónico
    const mailOptions = {
      from: 'comercioenlineafree@gmail.com', // Introducir el correo electrónico del remitente
      to: destinatario,
      subject: asunto,
      html: `<div style="background-color: #f2f2f2; padding: 20px; border-radius: 10px; width: 700px; margin: 0 auto;">
      <h1 >Información del contacto</h1>
      <h2>Nombre: ${name}</h2>
      <h2>Correo: ${correoxres}</h2>
      <h2>Mensaje: </h2>
      <h3>${mensaje}</h3>
      <img src="https://i.ibb.co/7bQQYkX/Logo.png" alt="Logo" border="0" width="100" height="100">
      </div>`,
    }


 // Enviar el correo electrónico utilizando el objeto transporter
 transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Ocurrió un error al enviar el correo electrónico.' });
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).json({ message: 'El correo electrónico se ha enviado correctamente.' });
    }
  });
}

module.exports = { enviarCorreo };