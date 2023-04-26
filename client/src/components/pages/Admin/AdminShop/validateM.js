function validate(inputsM) {
    let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let errors = {};
  
    if (!inputsM.name) {
      errors.name = "* Campo obligatorio";
    }
    if (!inputsM.summary) {
      errors.summary = "* Campo obligatorio";
    }
    if (!inputsM.path) {
      errors.path = "* Campo obligatorio";
    }
    if (!regexMail.test(inputsM.email)) {
      errors.email = "* Campo obligatorio"
    }
    if (!inputsM.location) {
      errors.location = "* Campo obligatorio";
    }
    return errors;
  }

  export default validate;