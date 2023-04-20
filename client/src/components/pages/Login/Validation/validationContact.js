const ValidationContact = (userData) => {
  let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let errors = {}
  if (!userData.name) {
    errors.name = 'Por favor ingresa un nombre'
  }
  if (!regexMail.test(userData.email)) {
    errors.email = 'Por favor ingresa un email valido'
  }
  if (!userData.description) {
    errors.description = 'Por favor ingresa un mensaje'
  }
  if (userData.email !== userData.confirmEmail) {
    errors.confirmEmail = 'El email no coincide'
  }
  return errors
}

export default ValidationContact
