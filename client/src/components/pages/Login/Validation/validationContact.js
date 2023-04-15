const ValidationContact = (userData) => {
  let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let errors = {}
  if (regexMail.test(userData.email)) {
  }
  if (userData.name) {
  }
}

export default ValidationContact
