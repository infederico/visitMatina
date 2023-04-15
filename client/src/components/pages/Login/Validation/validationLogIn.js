const ValidationLogIn = (userData) => {
  let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  //al menos 8 caracteres de longitud, 1 mayiuscula 1 minuscula y 1 numero
  let errors = {}
  if (!regexMail.test(userData.email)) {
    errors.email = 'Por favor ingresa un email valido'
  }
  if (!userData.password) {
    errors.password = 'Por favor ingresa una contrasena'
  }
  return errors
}

export default ValidationLogIn
