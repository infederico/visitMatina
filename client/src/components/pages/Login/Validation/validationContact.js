const ValidationContact = (userData) => {
  let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let errors = {}
  if (!userData.name) {
    errors.name = 'Por favor ingresa un nombre'
  }
  if (!regexMail.test(userData.correoxres)) {
    errors.correoxres = 'Por favor ingresa un email valido'
  }
  if (!userData.mensaje) {
    errors.mensaje = 'Por favor ingresa un mensaje'
  }
  if (userData.correoxres !== userData.confirmEmail) {
    errors.confirmEmail = 'El email no coincide'
  }
  return errors
}

export default ValidationContact
