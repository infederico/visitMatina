const ValidationRegister = (userData) => {
  let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/
  //al menos 8 caracteres de longitud, 1 mayiuscula 1 minuscula y 1 numero
  let errors = {}
  if (!userData.name) {
    errors.name = 'Por favor ingresa un nombre'
  }
  if (!regexMail.test(userData.email)) {
    errors.email = 'Por favor ingresa un email valido'
  }
  if (!regexPassword.test(userData.password)) {
    errors.password =
      'La contrasena debe contener al menos 8 caracteres de longitud, 1 mayuscula 1 minuscula y 1 numero'
  }
  if (userData.email !== userData.confirmEmail) {
    errors.confirmEmail = 'El email no coincide'
  }
  if (userData.password !== userData.confirmPassword) {
    errors.confirmPassword = 'La contrasena no coincide'
  }
  return errors
}

export default ValidationRegister
