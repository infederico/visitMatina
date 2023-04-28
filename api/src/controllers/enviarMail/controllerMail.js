require('dotenv').config()
const { EMAIL_PASSWORD, EMAIL, EMAIL_HOST } = process.env

const nodeMailer = require('nodemailer')
/*crea el objeto trasportador usando createTransport 
y le pasamos un objeto con las opciones de configuracion*/
const transporter = nodeMailer.createTransport({
  host: EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },
})

// Función para enviar correos electrónicos
const enviarCorreo = (req, res) => {
  const { name, correoxres, mensaje } = req.body //debe venir el destinatario(correo de tienda)
  const destinatario = 'visitmatina@gmail.com'
  const asunto = 'Contacto desde la web'

  // Configurar el objeto mailOptions: este se envia al dueño de la tienda
  const mailOptions = {
    from: 'comercioenlineafree@gmail.com', // Introducir el correo electrónico del remitente
    to: destinatario,
    subject: asunto,
    html: `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Tienda en línea - Información de contacto</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f2f2f2;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white; border-radius: 30px;">
          <header style="text-align: center; margin-bottom: 30px;">
            <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682286222/matina_logo_nnzq1n.png" alt="Logo de la tienda" width="130" height="100">
            <h1 style="font-size: 24px; margin-top: 0;">¡Tienes un nuevo contacto!</h1>
          </header>
          <section style="margin-bottom: 30px;">
            <p style="font-size: 18px; margin-bottom: 10px;">Estimado/a Administrador,</p>
            <p style="font-size: 16px; margin-bottom: 10px;">Haz recibido un mensaje desde la pagina web Visit Matina. A continuación se detalla la información que te han enviado:</p>
            <ul style="font-size: 16px; margin-bottom: 10px; list-style: none; padding: 0;">
              <li><strong>Nombre:</strong> ${name}</li>
              <li><strong>Correo electrónico:</strong> ${correoxres}</li>
              <li><strong>Mensaje:</strong></li>
              <li style="margin-left: 20px;">${mensaje}</li>
            </ul>
          </section>
          <footer style="text-align: center;">
            <p style="font-size: 14px;">Atentamente,</p>
            <p style="font-size: 16px; margin-top: 10px;">Equipo web de Visit Matina en línea</p>
          </footer>
        </div>
      </body>
      </html>
      `,
  }

  // Configurar el objeto mailOptionsDueno: este se envia al cliente
  const asuntocliente = 'Equipo Visit Matina en línea'
  const mailOptionsCli = {
    from: 'comercioenlineafree@gmail.com', // Introducir el correo electrónico del remitente
    to: correoxres, //el correo que proporciono el cliente en el formulario
    subject: asuntocliente,
    html: `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <title>Tienda en línea - Información de contacto</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f2f2f2;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white; border-radius: 30px;">
            <header style="text-align: center; margin-bottom: 30px;">
              <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682286222/matina_logo_nnzq1n.png" alt="Logo de la tienda" width="130" height="100">
              <h1 style="font-size: 24px; margin-top: 0;">¡Gracias por contactarnos!</h1>
            </header>
            <section style="margin-bottom: 30px;">
              <p style="font-size: 18px; margin-bottom: 10px;">Estimado/a ${name},</p>
              <p style="font-size: 16px; margin-bottom: 10px;">Hemos recibido su mensaje y nos pondremos en contacto con usted lo antes posible. A continuación se detalla la información que nos ha proporcionado:</p>
              <ul style="font-size: 16px; margin-bottom: 10px; list-style: none; padding: 0;">
                <li><strong>Nombre:</strong> ${name}</li>
                <li><strong>Correo electrónico:</strong> ${correoxres}</li>
                <li><strong>Mensaje:</strong></li>
                <li style="margin-left: 20px;">${mensaje}</li>
              </ul>
            </section>
            <footer style="text-align: center;">
              <p style="font-size: 14px;">Atentamente,</p>
              <p style="font-size: 16px; margin-top: 10px;">Equipo web de Visit Matina</p>
            </footer>
          </div>
        </body>
        </html>
        `,
  }

  // Enviar el correo electrónico utilizando el objeto transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      res
        .status(500)
        .json({ message: 'Ocurrió un error al enviar tu mensaje.' })
    } else {
      console.log('Correo electrónico enviado: ' + info.response)
      res
        .status(200)
        .json({ message: 'Tu mensaje se ha enviado correctamente. 😊' })
    }
  })

  //con este se envia el correo al cliente
  transporter.sendMail(mailOptionsCli, (error, info) => {
    if (error) {
      console.log(error)
      res
        .status(500)
        .json({ message: 'Ocurrió un error al enviar tu mensaje.' })
    } else {
      console.log('Correo electrónico enviado: ' + info.response)
      res
        .status(200)
        .json({ message: 'Tu mensaje se ha enviado correctamente.😊' })
    }
  })
}

module.exports = { enviarCorreo }
