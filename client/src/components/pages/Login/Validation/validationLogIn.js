const ValidationLogIn = (userData) => {
  let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/
  //al menos 8 caracteres de longitud, 1 mayiuscula 1 minuscula y 1 numero
  let errors = {}
  if (regexMail.test(userData.email)) {
  }
  if (regexPassword.test(userData.password)) {
  }
}

export default ValidationLogIn
